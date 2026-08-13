import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'checklist-10-sinais',
    title: 'Checklist: 10 sinais de alerta em anúncio de seminovo',
    category: 'Checklist',
    excerpt: 'Antes de agendar a visita, veja esses 10 sinais que todo anúncio de carro usado esconde.',
    readTime: '4 min de leitura',
    content: {
      lead: 'Antes de agendar a visita, um bom filtro no próprio anúncio já elimina boa parte do risco. Fique atento a:',
      sections: [
        {
          items: [
            'Fotos poucas, de baixa qualidade ou só de longe (evitam mostrar detalhes)',
            'Preço muito abaixo da média de mercado pro modelo/ano',
            'Descrição vaga, sem menção a histórico de revisão',
            'Anúncio de um carro "com pouco uso" com muitos anos de fabricação',
            'Vendedor com pressa incomum pra fechar',
            'Falta de informação sobre o número de donos anteriores',
            'Nenhuma menção a manual ou chave reserva',
            'Anúncio repostado várias vezes em intervalos curtos',
            'Resistência em permitir vistoria por terceiros',
            'Documentação "pronta pra transferir amanhã" — pressa suspeita',
          ],
        },
        {
          heading: 'Nenhum ponto, sozinho, descarta o carro',
          paragraphs: [
            'Mas quanto mais sinais aparecem juntos, maior o motivo pra levar alguém que entenda de inspeção antes de seguir.',
          ],
        },
      ],
      conclusion: 'Quer esse filtro feito por quem já viu de tudo? Chama no WhatsApp antes de agendar a visita.',
    },
  },
  {
    id: 'loja-particular-consultoria',
    title: 'Loja, particular ou consultoria: o que muda de verdade na hora de comprar usado',
    category: 'Comparativo',
    excerpt: 'Comparamos os 3 caminhos pra comprar carro usado — o que cada um garante (e o que não garante).',
    readTime: '5 min de leitura',
    content: {
      lead: 'Os três caminhos mais comuns pra comprar carro usado garantem coisas diferentes — e nenhum deles garante tudo sozinho.',
      sections: [
        {
          heading: 'Loja (concessionária ou revenda)',
          paragraphs: [
            'Garante nota fiscal e, geralmente, alguma procedência jurídica. Não garante que o carro passou por inspeção técnica profunda — a "vistoria" de loja costuma ser superficial, focada em vender rápido.',
          ],
        },
        {
          heading: 'Particular',
          paragraphs: [
            'Pode ter preço melhor e histórico mais direto com o dono. Não tem garantia formal nenhuma — você depende inteiramente da sua própria capacidade de avaliar o carro (ou da falta dela).',
          ],
        },
        {
          heading: 'Consultoria de compra assistida',
          paragraphs: [
            'Não é dona do carro, então não tem interesse em "empurrar" nada. O trabalho é 100% a favor de quem compra — inspeção técnica, negociação e documentação, seja o carro de loja ou de particular.',
          ],
        },
        {
          heading: 'A pergunta certa',
          paragraphs: [
            'Não é "loja ou particular" — é "quem está checando os detalhes técnicos antes de eu assinar". Isso muda mais o resultado do que a origem do carro.',
          ],
        },
      ],
      conclusion: 'Quer essa camada extra de segurança? Fala com a gente antes de fechar negócio.',
    },
  },
  {
    id: 'quilometragem-adulterada',
    title: 'Quilometragem adulterada: 5 sinais pra identificar antes de comprar',
    category: 'Inspeção',
    excerpt: 'Até 30% dos seminovos no Brasil têm suspeita de km adulterada. Veja como identificar antes de fechar negócio.',
    readTime: '4 min de leitura',
    content: {
      lead: 'Quilometragem baixa é um dos maiores atrativos de um anúncio — e um dos alvos mais comuns de fraude. Ajustar o painel é mais simples do que parece, e o comprador comum não tem como perceber sozinho. Veja 5 sinais que ajudam a desconfiar antes de fechar negócio.',
      sections: [
        {
          heading: '1. Desgaste do interior não bate com a quilometragem',
          paragraphs: [
            'Volante, câmbio, pedais e estofamento gasto demais pra um carro "com pouco uso" é sinal de alerta.',
          ],
        },
        {
          heading: '2. Histórico de revisões incompleto ou com lacunas',
          paragraphs: [
            'Se a concessionária não tem registro de todas as trocas de óleo esperadas pro km informado, algo não fecha.',
          ],
        },
        {
          heading: '3. Peças de desgaste natural muito mais gastas do que deveriam',
          paragraphs: [
            'Pneus, correias e outros componentes que se desgastam com o uso real do carro não mentem tão fácil quanto o painel.',
          ],
        },
        {
          heading: '4. Anúncio recorrente com quilometragem que "voltou"',
          paragraphs: [
            'Buscar o mesmo chassi em anúncios antigos e comparar o km declarado ao longo do tempo ajuda a identificar inconsistências.',
          ],
        },
        {
          heading: '5. Vendedor evita ou enrola pra mostrar documentação de manutenção',
          paragraphs: [
            'Desconfiança justificada quando não há transparência nos registros.',
          ],
        },
        {
          heading: 'Nenhum sinal isolado é prova definitiva',
          paragraphs: [
            'Mas juntos, formam um padrão. Uma inspeção técnica profissional confirma (or descarta) a suspeita antes de você assinar qualquer coisa.',
          ],
        },
      ],
      conclusion: 'Ficou com dúvida sobre um carro específico? Quer que a gente confira isso pra você?',
    },
  },
];
