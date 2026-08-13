export type Page = 'home' | 'como-funciona' | 'servicos' | 'sobre' | 'blog' | 'artigo';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: {
    lead: string;
    sections: {
      heading?: string;
      items?: string[];
      paragraphs?: string[];
    }[];
    conclusion?: string;
  };
}

export interface BriefingFormData {
  name: string;
  phone: string;
  budget: string;
  usage: string;
  passengers: string;
  preference: string;
  city: string;
}
