import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { TemplateEditor } from '@/components/admin/TemplateEditor';
import { supabase } from '@/lib/supabase';
import { Mail, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const defaultTemplates = [
  { template_type: 'welcome', template_name: 'Welcome Email', subject_line: 'Welcome to AIEPC!', body_content: '<h1>Welcome {{name}}!</h1>' },
  { template_type: 'payment_confirmation', template_name: 'Payment Confirmation', subject_line: 'Payment Received', body_content: '<h1>Payment Confirmed</h1>' },
  { template_type: 'payment_reminder', template_name: 'Payment Reminder', subject_line: 'Payment Due Soon', body_content: '<h1>Reminder</h1>' },
  { template_type: 'refund_confirmation', template_name: 'Refund Confirmation', subject_line: 'Refund Processed', body_content: '<h1>Refund Confirmed</h1>' },
  { template_type: 'renewal_reminder', template_name: 'Renewal Reminder', subject_line: 'Renew Your Membership', body_content: '<h1>Time to Renew</h1>' },
];

export default function EmailTemplatesPage() {
  const [templates, setTemplates] = useState<any[]>(defaultTemplates);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState<any>(null);
  const { toast } = useToast();

  const handleSave = async (template: any) => {
    toast({ title: 'Template saved successfully!' });
    const updated = templates.map(t => t.template_type === template.template_type ? template : t);
    setTemplates(updated);
  };

  const handlePreview = (template: any) => {
    setPreviewContent(template);
    setPreviewOpen(true);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Email Template Manager</h1>
          <p className="text-gray-600">Customize email templates and manage A/B testing</p>
        </div>

        <Tabs defaultValue="welcome" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full">
            {templates.map(t => (
              <TabsTrigger key={t.template_type} value={t.template_type}>
                <Mail className="w-4 h-4 mr-2" />
                {t.template_name}
              </TabsTrigger>
            ))}
          </TabsList>

          {templates.map(template => (
            <TabsContent key={template.template_type} value={template.template_type}>
              <TemplateEditor
                template={template}
                onSave={handleSave}
                onPreview={handlePreview}
              />
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Email Preview</DialogTitle>
            </DialogHeader>
            <div className="border rounded-lg p-6 bg-white">
              {previewContent?.logo_url && (
                <img src={previewContent.logo_url} alt="Logo" className="h-16 mb-4" />
              )}
              <h3 className="font-bold mb-4">Subject: {previewContent?.subject_line}</h3>
              <div dangerouslySetInnerHTML={{ __html: previewContent?.body_content || '' }} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
