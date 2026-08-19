/**
 * Interface copy in both languages.
 *
 * This file holds *chrome*: navigation, section headers, form labels and
 * anything else that is not editorial content. Experience entries, services,
 * case studies and education live in `src/content` so they can be edited as
 * files without touching code.
 *
 * The Spanish dictionary is the source of truth: every key it declares must
 * also exist in English, and TypeScript fails the build when one is missing.
 */

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' satisfies Lang;

export type Lang = keyof typeof languages;

const es = {
  'meta.title': 'Daniel Reyes — Senior Software Developer',
  'meta.description':
    'Convierto procesos manuales en agentes de IA. Automatización con n8n y OpenAI, búsqueda semántica y aplicaciones enterprise con Angular, Node.js y .NET.',

  'a11y.skip': 'Saltar al contenido',
  'a11y.language': 'Idioma',
  'a11y.theme': 'Cambiar tema',
  'a11y.themeToDark': 'Cambiar a tema oscuro',
  'a11y.themeToLight': 'Cambiar a tema claro',
  'a11y.primaryNav': 'Navegación principal',
  'a11y.openMenu': 'Abrir menú',
  'a11y.closeMenu': 'Cerrar menú',
  'a11y.workflowDiagram':
    'Diagrama de un workflow de IA: disparador, agente, base vectorial y salida',

  'nav.services': 'Servicios',
  'nav.stack': 'Stack',
  'nav.experience': 'Experiencia',
  'nav.cases': 'Casos',
  'nav.contact': 'Contacto',
  'nav.cta': 'Hablemos',

  'hero.status': 'Disponible para proyectos · San Pedro Sula, HN',
  'hero.headline.1': 'Convierto procesos',
  'hero.headline.2': 'manuales en',
  'hero.headline.3': 'agentes de IA',
  'hero.lead':
    'Senior Software Developer. Diseño workflows con n8n y nodos personalizados en TypeScript, conecto modelos de OpenAI a sistemas reales y levanto el frontend enterprise que la gente usa todos los días.',
  'hero.cta.primary': 'Ver servicios de IA',
  'hero.cta.secondary': 'Recorrer mi experiencia',

  'hero.stat.1.value': '2022 → hoy',
  'hero.stat.1.label': 'Experiencia profesional',
  'hero.stat.2.value': '2 maestrías',
  'hero.stat.2.label': 'IA · Gestión de TI — en curso',
  'hero.stat.3.value': 'ES · EN B2',
  'hero.stat.3.label': 'Idiomas de trabajo',
  'hero.stat.4.value': 'Node · .NET · Angular',
  'hero.stat.4.label': 'Stack principal',

  'workflow.file': 'rag-agent.workflow.json',
  'workflow.live': 'activo',
  'workflow.badge': 'IA',
  'workflow.node.trigger.label': 'Trigger',
  'workflow.node.trigger.title': 'Webhook / WhatsApp',
  'workflow.node.agent.label': 'Agente',
  'workflow.node.agent.title': 'OpenAI + tools',
  'workflow.node.embeddings.label': 'Embeddings',
  'workflow.node.embeddings.title': 'PostgreSQL · cosine',
  'workflow.node.vector.label': 'Vector search',
  'workflow.node.vector.title': 'Mongo · pgvector',
  'workflow.node.output.label': 'Output',
  'workflow.node.output.title': 'API · CRM · Chat',

  'services.eyebrow': 'Servicios',
  'services.title': 'Lo que puedo construir para tu equipo',
  'services.lead':
    'Empiezo por el proceso, no por la herramienta. Primero mapeo dónde se pierde el tiempo; después decido si la respuesta es un agente, un índice vectorial o simplemente un buen backend.',

  'stack.eyebrow': 'Stack',
  'stack.title': 'Con qué trabajo a diario',
  'stack.lead':
    'Backend, frontend, móvil y la capa de IA que los une. En naranja está donde más profundo estoy trabajando ahora mismo.',
  'stack.group.ai': 'IA & Automatización',
  'stack.group.backend': 'Backend',
  'stack.group.frontend': 'Frontend',
  'stack.group.data': 'Datos',
  'stack.group.mobile': 'Móvil & Escritorio',
  'stack.group.practices': 'Prácticas',

  'experience.eyebrow': 'Experiencia',
  'experience.title': 'Dónde he construido',
  'experience.present': 'actual',

  'cases.eyebrow': 'Casos',
  'cases.title': 'Tres problemas y cómo los resolví',
  'cases.lead':
    'Extractos de trabajo real. El detalle técnico completo lo comparto en una llamada, dentro de lo que cada acuerdo de confidencialidad permite.',

  'education.eyebrow': 'Formación',
  'education.title': 'Aprender es parte del trabajo',
  'education.panel.studies': 'Educación',
  'education.panel.languages': 'Idiomas',
  'education.panel.work': 'Cómo trabajo',
  'education.inProgress': 'En curso',

  'languages.spanish': 'Español',
  'languages.spanish.level': 'Nativo',
  'languages.english': 'Inglés',
  'languages.english.level': 'B2',

  'soft.1': 'Aprendizaje continuo',
  'soft.2': 'Comunicación asertiva',
  'soft.3': 'Trabajo en equipo',
  'soft.4': 'Proactividad',
  'soft.5': 'Gestión del tiempo',

  'contact.eyebrow': 'Contacto',
  'contact.title': '¿Tienes un proceso que debería resolverse solo?',
  'contact.lead':
    'Cuéntame qué haces hoy a mano. Te respondo con una idea concreta de cómo automatizarlo, qué costaría y en cuánto tiempo — sin compromiso.',
  'contact.link.email': 'Correo',
  'contact.link.whatsapp': 'WhatsApp',
  'contact.link.github': 'GitHub',
  'contact.link.linkedin': 'LinkedIn',

  'form.name.label': 'Tu nombre',
  'form.name.placeholder': 'María López',
  'form.email.label': 'Correo de trabajo',
  'form.email.placeholder': 'maria@empresa.com',
  'form.topic.label': '¿Qué necesitas?',
  'form.topic.agent': 'Agente de IA / automatización',
  'form.topic.rag': 'Búsqueda semántica o RAG',
  'form.topic.chatbot': 'Chatbot de WhatsApp',
  'form.topic.app': 'Aplicación web o móvil',
  'form.topic.unsure': 'Aún no lo tengo claro',
  'form.message.label': 'Cuéntame el proceso',
  'form.message.placeholder':
    'Hoy alguien copia pedidos del correo al ERP, unos 60 al día…',
  'form.submit': 'Enviar mensaje',
  'form.submitting': 'Enviando…',
  'form.note': 'Respondo en menos de 24 horas hábiles.',
  'form.error.name': 'Escribe tu nombre para saber con quién hablo.',
  'form.error.email': 'Necesito un correo válido para poder responderte.',
  'form.error.message': 'Cuéntame algo del proceso, aunque sea en una línea.',
  'form.error.network':
    'No se pudo enviar el mensaje. Escríbeme directo por correo o WhatsApp.',
  'form.success': 'Mensaje enviado. Te respondo muy pronto.',

  'footer.rights': 'Todos los derechos reservados.',
} as const;

const en = {
  'meta.title': 'Daniel Reyes — Senior Software Developer',
  'meta.description':
    'I turn manual processes into AI agents. Automation with n8n and OpenAI, semantic search, and enterprise applications with Angular, Node.js and .NET.',

  'a11y.skip': 'Skip to content',
  'a11y.language': 'Language',
  'a11y.theme': 'Toggle theme',
  'a11y.themeToDark': 'Switch to dark theme',
  'a11y.themeToLight': 'Switch to light theme',
  'a11y.primaryNav': 'Primary navigation',
  'a11y.openMenu': 'Open menu',
  'a11y.closeMenu': 'Close menu',
  'a11y.workflowDiagram':
    'Diagram of an AI workflow: trigger, agent, vector database and output',

  'nav.services': 'Services',
  'nav.stack': 'Stack',
  'nav.experience': 'Experience',
  'nav.cases': 'Case studies',
  'nav.contact': 'Contact',
  'nav.cta': "Let's talk",

  'hero.status': 'Available for projects · San Pedro Sula, HN',
  'hero.headline.1': 'I turn manual',
  'hero.headline.2': 'processes into',
  'hero.headline.3': 'AI agents',
  'hero.lead':
    'Senior Software Developer. I design n8n workflows with custom TypeScript nodes, wire OpenAI models into real systems, and build the enterprise frontend people actually use every day.',
  'hero.cta.primary': 'See AI services',
  'hero.cta.secondary': 'Walk through my experience',

  'hero.stat.1.value': '2022 → now',
  'hero.stat.1.label': 'Professional experience',
  'hero.stat.2.value': "2 master's",
  'hero.stat.2.label': 'AI · IT management — in progress',
  'hero.stat.3.value': 'ES · EN B2',
  'hero.stat.3.label': 'Working languages',
  'hero.stat.4.value': 'Node · .NET · Angular',
  'hero.stat.4.label': 'Core stack',

  'workflow.file': 'rag-agent.workflow.json',
  'workflow.live': 'live',
  'workflow.badge': 'AI',
  'workflow.node.trigger.label': 'Trigger',
  'workflow.node.trigger.title': 'Webhook / WhatsApp',
  'workflow.node.agent.label': 'Agent',
  'workflow.node.agent.title': 'OpenAI + tools',
  'workflow.node.embeddings.label': 'Embeddings',
  'workflow.node.embeddings.title': 'PostgreSQL · cosine',
  'workflow.node.vector.label': 'Vector search',
  'workflow.node.vector.title': 'Mongo · pgvector',
  'workflow.node.output.label': 'Output',
  'workflow.node.output.title': 'API · CRM · Chat',

  'services.eyebrow': 'Services',
  'services.title': 'What I can build for your team',
  'services.lead':
    'I start with the process, not the tool. First I map where the time is lost; then I decide whether the answer is an agent, a vector index, or simply a solid backend.',

  'stack.eyebrow': 'Stack',
  'stack.title': 'What I work with daily',
  'stack.lead':
    'Backend, frontend, mobile, and the AI layer that ties them together. Orange marks where I am going deepest right now.',
  'stack.group.ai': 'AI & Automation',
  'stack.group.backend': 'Backend',
  'stack.group.frontend': 'Frontend',
  'stack.group.data': 'Data',
  'stack.group.mobile': 'Mobile & Desktop',
  'stack.group.practices': 'Practices',

  'experience.eyebrow': 'Experience',
  'experience.title': "Where I've built",
  'experience.present': 'present',

  'cases.eyebrow': 'Case studies',
  'cases.title': 'Three problems, and how I solved them',
  'cases.lead':
    'Excerpts from real work. Full technical detail I share on a call, within what each confidentiality agreement allows.',

  'education.eyebrow': 'Education',
  'education.title': 'Learning is part of the job',
  'education.panel.studies': 'Education',
  'education.panel.languages': 'Languages',
  'education.panel.work': 'How I work',
  'education.inProgress': 'In progress',

  'languages.spanish': 'Spanish',
  'languages.spanish.level': 'Native',
  'languages.english': 'English',
  'languages.english.level': 'B2',

  'soft.1': 'Continuous learning',
  'soft.2': 'Assertive communication',
  'soft.3': 'Teamwork',
  'soft.4': 'Proactivity',
  'soft.5': 'Time management',

  'contact.eyebrow': 'Contact',
  'contact.title': 'Got a process that should be running itself?',
  'contact.lead':
    "Tell me what you do by hand today. I'll come back with a concrete idea of how to automate it, what it would cost and how long it would take — no strings attached.",
  'contact.link.email': 'Email',
  'contact.link.whatsapp': 'WhatsApp',
  'contact.link.github': 'GitHub',
  'contact.link.linkedin': 'LinkedIn',

  'form.name.label': 'Your name',
  'form.name.placeholder': 'Maria Lopez',
  'form.email.label': 'Work email',
  'form.email.placeholder': 'maria@company.com',
  'form.topic.label': 'What do you need?',
  'form.topic.agent': 'AI agent / automation',
  'form.topic.rag': 'Semantic search or RAG',
  'form.topic.chatbot': 'WhatsApp chatbot',
  'form.topic.app': 'Web or mobile application',
  'form.topic.unsure': 'Not sure yet',
  'form.message.label': 'Tell me about the process',
  'form.message.placeholder':
    'Today someone copies orders from email into the ERP, about 60 a day…',
  'form.submit': 'Send message',
  'form.submitting': 'Sending…',
  'form.note': 'I reply within 24 business hours.',
  'form.error.name': 'Add your name so I know who I am talking to.',
  'form.error.email': 'I need a valid email address to reply.',
  'form.error.message': 'Tell me something about the process, even one line.',
  'form.error.network':
    'The message could not be sent. Reach me directly by email or WhatsApp.',
  'form.success': "Message sent. I'll get back to you shortly.",

  'footer.rights': 'All rights reserved.',
} as const;

export type UIKey = keyof typeof es;

export const ui = { es, en } satisfies Record<Lang, Record<UIKey, string>>;
