
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  position: string;
  phone: string;
  interest: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    position: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: t("contactPage.successTitle"),
        description: t("contactPage.successMessage"),
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        position: '',
        phone: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: t("contactPage.errorTitle"),
        description: t("contactPage.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("contactPage.title")}</h1>
          <p className="text-lg text-muted-foreground">
            {t("contactPage.formDescription")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("contactPage.info")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("contactPage.address")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("contactPage.addressValue")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("contactPage.phoneLabel")}</h3>
                    <a 
                      href="tel:+88662353535,1535"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t("contactPage.phoneValue")}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("contactPage.email")}</h3>
                    <a 
                      href="mailto:11402047@gs.ncku.edu.tw"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t("contactPage.emailValue")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Join Alliance Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t("contactPage.formTitle")}</CardTitle>
                <CardDescription>
                  {t("contactPage.formDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contactPage.name")} <span className="text-destructive">*</span></Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={t("contactPage.namePlaceholder")}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contactPage.emailLabel")} <span className="text-destructive">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t("contactPage.emailPlaceholder")}
                    />
                  </div>

                  {/* Organization and Position in a row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">{t("contactPage.organization")} <span className="text-destructive">*</span></Label>
                      <Input
                        id="organization"
                        required
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder={t("contactPage.organizationPlaceholder")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">{t("contactPage.position")} <span className="text-destructive">*</span></Label>
                      <Input
                        id="position"
                        required
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        placeholder={t("contactPage.positionPlaceholder")}
                      />
                    </div>
                  </div>

                  {/* Phone and Interest in a row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("contactPage.phone")}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={t("contactPage.phonePlaceholder")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">{t("contactPage.interest")} <span className="text-destructive">*</span></Label>
                      <Select 
                        required
                        value={formData.interest} 
                        onValueChange={(value) => handleInputChange('interest', value)}
                      >
                        <SelectTrigger id="interest">
                          <SelectValue placeholder={t("contactPage.interestPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="research">{t("contactPage.interestOptions.research")}</SelectItem>
                          <SelectItem value="technology">{t("contactPage.interestOptions.technology")}</SelectItem>
                          <SelectItem value="service">{t("contactPage.interestOptions.service")}</SelectItem>
                          <SelectItem value="partnership">{t("contactPage.interestOptions.partnership")}</SelectItem>
                          <SelectItem value="other">{t("contactPage.interestOptions.other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contactPage.message")}</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={t("contactPage.messagePlaceholder")}
                      className="resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("contactPage.submitting")}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t("contactPage.submit")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

