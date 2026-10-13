import LegalLayout from '../components/legal/LegalLayout'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: [
      'By accessing or using the Nexa Tech website, you agree to these Terms and Conditions. If you do not agree, please do not use the website.',
    ],
  },
  {
    id: 'services',
    title: 'Our Services',
    body: [
      'Nexa Tech provides web development, mobile application development, custom software, and AI and automation services. Information on this website is for general purposes and does not by itself create a contract.',
      'Paid work is carried out under a separate written agreement or statement of work that defines scope, timelines, fees, and deliverables. If it conflicts with these terms, the signed agreement prevails.',
    ],
  },
  {
    id: 'use-of-website',
    title: 'Use of the Website',
    body: [
      'You agree to use this website lawfully. You must not:',
      {
        list: [
          'Attempt to gain unauthorised access to our systems or data.',
          'Introduce malware or interfere with the normal operation of the website.',
          'Scrape or copy content in bulk without our written permission.',
          'Submit false, misleading, or unlawful information through our forms.',
        ],
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: [
      'All content on this website, including text, design, logos, graphics, and code, belongs to Nexa Tech or its licensors and is protected by applicable intellectual property laws. You may view and share pages for personal, non-commercial use, but may not reproduce or modify them without prior written consent.',
      'Ownership of work delivered to clients is governed by the individual project agreement.',
    ],
  },
  {
    id: 'submissions',
    title: 'Information You Send Us',
    body: [
      'When you send us enquiries, project details, or applications, you confirm that the information is accurate and that you have the right to share it. We will handle it according to our Privacy Policy.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    body: [
      'This website may contain links to other sites. We do not control or endorse them and are not responsible for their content or practices.',
    ],
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    body: [
      'The website and its content are provided "as is" and "as available". We make reasonable efforts to keep information accurate and up to date, but we do not guarantee that it is complete, error-free, or uninterrupted.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Nexa Tech will not be liable for any indirect, incidental, or consequential loss arising from your use of this website or reliance on its content.',
    ],
  },
  {
    id: 'indemnity',
    title: 'Indemnity',
    body: [
      'You agree to indemnify Nexa Tech against claims, damages, or expenses arising from your misuse of the website or your breach of these terms.',
    ],
  },
  {
    id: 'termination',
    title: 'Suspension of Access',
    body: [
      'We may restrict or suspend access to the website at any time, without notice, if we believe these terms have been violated or for security or maintenance reasons.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body: [
      'These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    body: [
      'We may revise these terms at any time. The updated version will be posted on this page with a new "Last updated" date, and continued use of the website means you accept the changes.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: [
      'For questions about these terms, contact Nexa Tech at hello@nexatech.in or +91 79 4000 0000, Ahmedabad, Gujarat, India.',
    ],
  },
]

export default function Terms() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      updated="13 October 2026"
      intro="Please read these terms carefully before using our website or contacting us about a project."
      sections={sections}
    />
  )
}