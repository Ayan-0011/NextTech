import LegalLayout from '../components/legal/LegalLayout'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: [
      'Nexa Tech ("we", "us", "our") respects your privacy. This Privacy Policy explains what personal information we collect when you visit our website or contact us, how we use it, and the choices you have.',
      'By using this website, you agree to the practices described in this policy.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: [
      'We collect only the information needed to respond to you and to run this website.',
      {
        list: [
          'Information you provide: your name, email address, phone number, company name, and any message or project details you send through our contact form, email, or job applications.',
          'Usage information: pages visited, time spent, referring pages, and similar analytics data.',
          'Device information: browser type, operating system, device type, and IP address.',
        ],
      },
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    body: [
      {
        list: [
          'To respond to your enquiries and provide quotes or proposals.',
          'To review job applications submitted through our Careers page.',
          'To maintain, secure, and improve our website and services.',
          'To send project-related updates, where you have engaged us.',
          'To comply with legal obligations.',
        ],
      },
      'We do not sell your personal information.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and Analytics',
    body: [
      'We may use cookies and similar technologies to remember your preferences and understand how visitors use our website. You can disable cookies in your browser settings, though some parts of the site may not work as intended.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing of Information',
    body: [
      'We share personal information only when necessary:',
      {
        list: [
          'With service providers who help us operate the website, such as hosting, analytics, and email services, under appropriate confidentiality terms.',
          'When required by law, court order, or a government authority.',
          'In connection with a business transfer such as a merger or acquisition.',
        ],
      },
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    body: [
      'We keep your information only for as long as needed for the purpose it was collected, or as required by law. Enquiries that do not lead to a project are deleted within a reasonable period.',
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    body: [
      'We use reasonable technical and organisational measures to protect your information against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    body: [
      'Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you may:',
      {
        list: [
          'Request access to the personal information we hold about you.',
          'Ask us to correct inaccurate or incomplete information.',
          'Ask us to delete your information.',
          'Withdraw your consent to our processing of your information.',
        ],
      },
      'To make a request, email us at hello@nexatech.in.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    body: [
      'Our website may link to third-party sites such as LinkedIn, GitHub, and Instagram. We are not responsible for their content or privacy practices, so please read their policies separately.',
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    body: [
      'Our website is not directed at children under 18, and we do not knowingly collect their personal information. If you believe a child has provided us data, contact us and we will delete it.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: [
      'We may update this policy from time to time. The "Last updated" date at the top of this page shows when it was last revised. Continued use of the website means you accept the updated policy.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: [
      'For questions about this Privacy Policy, contact Nexa Tech at hello@nexatech.in or +91 79 4000 0000, Ahmedabad, Gujarat, India.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="13 October 2026"
      intro="This policy explains what information we collect, why we collect it, and how you can control it."
      sections={sections}
    />
  )
}