import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button
} from '@/components/ui'

export const metadata: Metadata = {
  title: 'Security Policy | Data Protection & Cybersecurity | Smartest Assistant',
  description: 'Our comprehensive security policy outlining data protection measures, cybersecurity protocols, and information security practices.',
  keywords: 'security policy, data protection, cybersecurity, information security, encryption, security measures',
  openGraph: {
    title: 'Security Policy | Data Protection & Cybersecurity',
    description: 'Learn about our comprehensive security measures and commitment to protecting your data.',
    url: 'https://smartestassistant.com/legal/security',
  }
}

const securityFrameworks = [
  {
    framework: 'ISO 27001',
    description: 'International standard for information security management systems',
    status: 'Certified',
    coverage: 'Complete ISMS framework with regular audits and continuous improvement',
    benefits: ['Risk assessment', 'Security controls', 'Incident response', 'Business continuity']
  },
  {
    framework: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls audit',
    status: 'Compliant',
    coverage: 'Annual third-party audits of security controls and processes',
    benefits: ['Security monitoring', 'Access controls', 'Data integrity', 'Privacy protection']
  },
  {
    framework: 'NIST Cybersecurity Framework',
    description: 'U.S. national cybersecurity standards and best practices',
    status: 'Implemented',
    coverage: 'Five-function framework: Identify, Protect, Detect, Respond, Recover',
    benefits: ['Risk management', 'Security governance', 'Incident response', 'Recovery planning']
  },
  {
    framework: 'GDPR & CCPA Compliance',
    description: 'Data protection and privacy regulation compliance',
    status: 'Fully Compliant',
    coverage: 'Privacy by design, data minimization, and comprehensive privacy controls',
    benefits: ['Privacy protection', 'User rights', 'Data governance', 'Regulatory compliance']
  }
]

const dataProtectionMeasures = [
  {
    category: 'Encryption',
    measures: [
      {
        measure: 'Data in Transit',
        implementation: 'TLS 1.3 encryption for all data transmission',
        strength: 'AES-256 encryption with perfect forward secrecy',
        verification: 'SSL certificate validation and monitoring'
      },
      {
        measure: 'Data at Rest',
        implementation: 'AES-256 encryption for stored data',
        strength: 'Hardware security modules (HSM) for key management',
        verification: 'Regular encryption audits and key rotation'
      },
      {
        measure: 'Backup Encryption',
        implementation: 'Encrypted backups with separate key management',
        strength: 'Military-grade encryption for all backup systems',
        verification: 'Backup integrity testing and restoration validation'
      }
    ]
  },
  {
    category: 'Access Controls',
    measures: [
      {
        measure: 'Multi-Factor Authentication',
        implementation: 'Required for all user and admin accounts',
        strength: 'TOTP, hardware tokens, and biometric options',
        verification: 'MFA bypass monitoring and audit trails'
      },
      {
        measure: 'Role-Based Access Control',
        implementation: 'Principle of least privilege with defined roles',
        strength: 'Granular permissions and regular access reviews',
        verification: 'Quarterly access audits and automated monitoring'
      },
      {
        measure: 'Session Management',
        implementation: 'Secure session tokens with timeout controls',
        strength: 'Automatic logout and concurrent session limits',
        verification: 'Session monitoring and anomaly detection'
      }
    ]
  },
  {
    category: 'Infrastructure Security',
    measures: [
      {
        measure: 'Network Security',
        implementation: 'Firewall protection and network segmentation',
        strength: 'Intrusion detection and prevention systems',
        verification: 'Regular penetration testing and vulnerability scans'
      },
      {
        measure: 'Endpoint Protection',
        implementation: 'Enterprise antivirus and endpoint detection',
        strength: 'Real-time threat monitoring and response',
        verification: 'Continuous endpoint monitoring and incident response'
      },
      {
        measure: 'Cloud Security',
        implementation: 'Secure cloud architecture with hardened configurations',
        strength: 'Cloud access security broker (CASB) implementation',
        verification: 'Cloud security posture management and compliance monitoring'
      }
    ]
  }
]

const incidentResponse = [
  {
    phase: 'Detection & Analysis',
    timeframe: '0-2 hours',
    activities: [
      'Security monitoring systems identify potential incident',
      'Initial triage and severity assessment',
      'Incident classification and team notification',
      'Evidence preservation and documentation begins'
    ],
    team: 'Security Operations Center (SOC)',
    tools: 'SIEM, IDS/IPS, Threat Intelligence'
  },
  {
    phase: 'Containment & Eradication',
    timeframe: '2-8 hours',
    activities: [
      'Isolate affected systems to prevent spread',
      'Remove threats and patch vulnerabilities',
      'Implement temporary security measures',
      'Coordinate with external partners if needed'
    ],
    team: 'Incident Response Team',
    tools: 'Isolation tools, Forensic software, Patch management'
  },
  {
    phase: 'Recovery & Monitoring',
    timeframe: '8-24 hours',
    activities: [
      'Restore systems from clean backups',
      'Implement enhanced monitoring',
      'Validate system integrity and functionality',
      'Monitor for signs of persistent threats'
    ],
    team: 'IT Operations & Security',
    tools: 'Backup systems, Monitoring tools, Validation scripts'
  },
  {
    phase: 'Post-Incident Review',
    timeframe: '1-2 weeks',
    activities: [
      'Conduct thorough incident analysis',
      'Document lessons learned and improvements',
      'Update security controls and procedures',
      'Provide stakeholder reports and notifications'
    ],
    team: 'Full Response Team',
    tools: 'Analysis tools, Documentation systems, Reporting platforms'
  }
]

const securityTraining = [
  {
    audience: 'All Employees',
    frequency: 'Quarterly',
    topics: [
      'Security awareness fundamentals',
      'Phishing and social engineering recognition',
      'Password security and MFA usage',
      'Data handling and privacy requirements'
    ],
    delivery: 'Online modules with testing and certification'
  },
  {
    audience: 'Technical Staff',
    frequency: 'Monthly',
    topics: [
      'Secure coding practices and code review',
      'Infrastructure security and hardening',
      'Threat modeling and risk assessment',
      'Incident response and forensics'
    ],
    delivery: 'Technical workshops and hands-on labs'
  },
  {
    audience: 'Management',
    frequency: 'Semi-annual',
    topics: [
      'Cybersecurity risk management',
      'Regulatory compliance requirements',
      'Incident response planning and communication',
      'Security governance and oversight'
    ],
    delivery: 'Executive briefings and tabletop exercises'
  },
  {
    audience: 'Contractors & VAs',
    frequency: 'Upon onboarding + annual',
    topics: [
      'Client data protection requirements',
      'Secure communication protocols',
      'Incident reporting procedures',
      'Compliance with security policies'
    ],
    delivery: 'Specialized training modules and assessments'
  }
]

const vulnerabilityManagement = [
  {
    activity: 'Vulnerability Scanning',
    frequency: 'Continuous',
    description: 'Automated scanning of all systems and applications for security vulnerabilities',
    tools: 'Nessus, Qualys, OpenVAS',
    coverage: 'Internal networks, external assets, web applications, cloud infrastructure'
  },
  {
    activity: 'Penetration Testing',
    frequency: 'Quarterly',
    description: 'Professional ethical hacking to identify security weaknesses',
    tools: 'Third-party security firms, Bug bounty programs',
    coverage: 'External perimeter, internal networks, web applications, social engineering'
  },
  {
    activity: 'Code Security Reviews',
    frequency: 'Per release',
    description: 'Static and dynamic analysis of application source code',
    tools: 'SonarQube, Checkmarx, Veracode',
    coverage: 'All custom applications, third-party integrations, API endpoints'
  },
  {
    activity: 'Patch Management',
    frequency: 'Immediate/Scheduled',
    description: 'Systematic application of security patches and updates',
    tools: 'WSUS, Ansible, Puppet',
    coverage: 'Operating systems, applications, firmware, security tools'
  }
]

export default function SecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">Security Policy</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600 text-center">
            Smartest Assistant maintains comprehensive security policies and procedures to protect client data, 
            ensure service availability, and maintain the confidentiality, integrity, and availability of all systems and information.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🛡️</div>
              <div>
                <H3 className="mb-3 text-blue-800">Security-First Approach</H3>
                <Paragraph className="text-blue-700 mb-4">
                  Security is not an afterthought but a fundamental aspect of our service design. We implement 
                  multiple layers of protection and maintain industry-leading security standards across all operations.
                </Paragraph>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">24/7 Monitoring:</div>
                    <div className="text-blue-700">Continuous security monitoring and threat detection</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">Zero Trust Model:</div>
                    <div className="text-blue-700">Verify everything, trust nothing approach</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">Regular Audits:</div>
                    <div className="text-blue-700">Third-party security assessments and certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <div>Last updated: January 2024</div>
            <div>Effective date: January 1, 2024</div>
          </div>
        </div>
      </Section>

      {/* Security Frameworks */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Security Frameworks & Certifications"
          description="Industry-standard frameworks and certifications guiding our security practices"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {securityFrameworks.map((framework, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <H3 className="text-primary-blue">{framework.framework}</H3>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  framework.status === 'Certified' ? 'bg-green-100 text-green-700' :
                  framework.status === 'Compliant' ? 'bg-blue-100 text-blue-700' :
                  framework.status === 'Implemented' ? 'bg-purple-100 text-purple-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {framework.status}
                </div>
              </div>
              
              <Paragraph className="text-gray-600 text-sm mb-4">
                {framework.description}
              </Paragraph>
              
              <div className="mb-4">
                <div className="font-semibold text-gray-800 mb-2">Coverage:</div>
                <Paragraph className="text-gray-600 text-sm">
                  {framework.coverage}
                </Paragraph>
              </div>
              
              <div>
                <div className="font-semibold text-gray-800 mb-2">Key Benefits:</div>
                <div className="flex flex-wrap gap-2">
                  {framework.benefits.map((benefit, benefitIndex) => (
                    <span key={benefitIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Data Protection Measures */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Data Protection Measures"
          description="Comprehensive technical and administrative controls protecting your data"
          centered
        />
        
        <div className="space-y-12">
          {dataProtectionMeasures.map((category, index) => (
            <div key={index}>
              <H3 className="mb-6 text-center text-primary-blue">{category.category}</H3>
              <div className="grid md:grid-cols-3 gap-8">
                {category.measures.map((measure, measureIndex) => (
                  <div key={measureIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <H3 className="mb-3 text-lg">{measure.measure}</H3>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-gray-800 text-sm mb-1">Implementation:</div>
                        <div className="text-gray-600 text-sm">{measure.implementation}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-gray-800 text-sm mb-1">Strength:</div>
                        <div className="text-gray-600 text-sm">{measure.strength}</div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <div className="font-semibold text-blue-800 text-sm mb-1">Verification:</div>
                        <div className="text-blue-700 text-sm">{measure.verification}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Incident Response */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Incident Response Process"
          description="Structured approach to detecting, responding to, and recovering from security incidents"
          centered
          theme="dark"
        />
        
        <div className="space-y-8">
          {incidentResponse.map((phase, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-accent-amber text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <H3 className="text-white text-lg">{phase.phase}</H3>
                  <div className="text-blue-200 text-sm">{phase.timeframe}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-blue-200 mb-2">Key Activities:</div>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="text-blue-100 text-sm">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="font-semibold text-blue-200 mb-2">Responsible Team:</div>
                  <div className="text-blue-100 text-sm">{phase.team}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-blue-200 mb-2">Tools & Resources:</div>
                  <div className="text-blue-100 text-sm">{phase.tools}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Security Training */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Security Training & Awareness"
          description="Comprehensive security education programs for all team members and stakeholders"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {securityTraining.map((training, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <H3 className="text-primary-blue">{training.audience}</H3>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {training.frequency}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="font-semibold text-gray-800 mb-3">Training Topics:</div>
                <ul className="space-y-2">
                  {training.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">•</span>
                      <span className="text-gray-600 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-blue-800 text-sm mb-1">Delivery Method:</div>
                <div className="text-blue-700 text-sm">{training.delivery}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Vulnerability Management */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Vulnerability Management Program"
          description="Proactive identification, assessment, and remediation of security vulnerabilities"
          centered
        />
        
        <div className="space-y-6">
          {vulnerabilityManagement.map((vuln, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <H3 className="text-lg">{vuln.activity}</H3>
                  <div className="text-red-600 text-sm font-medium">{vuln.frequency}</div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="font-semibold text-gray-800 mb-2">Description:</div>
                  <Paragraph className="text-gray-600 text-sm">
                    {vuln.description}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Tools:</div>
                  <div className="text-gray-600 text-sm">{vuln.tools}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Coverage:</div>
                  <div className="text-gray-600 text-sm">{vuln.coverage}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Security Contacts */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Security Contact Information"
            description="Report security incidents or vulnerabilities to our security team"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <H3 className="mb-6 text-white">Security Incident Reporting</H3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  🚨
                </div>
                <div className="font-semibold text-blue-200 mb-2">Emergency Incidents</div>
                <div className="text-white text-sm mb-2">security-emergency@smartestassistant.com</div>
                <div className="text-blue-100 text-xs">24/7 Response • < 1 hour</div>
              </div>
              
              <div>
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  🔍
                </div>
                <div className="font-semibold text-blue-200 mb-2">Vulnerability Reports</div>
                <div className="text-white text-sm mb-2">security@smartestassistant.com</div>
                <div className="text-blue-100 text-xs">Business hours • < 4 hours</div>
              </div>
              
              <div>
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  📋
                </div>
                <div className="font-semibold text-blue-200 mb-2">General Security</div>
                <div className="text-white text-sm mb-2">security-general@smartestassistant.com</div>
                <div className="text-blue-100 text-xs">Business hours • < 24 hours</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Paragraph className="text-blue-100 text-sm">
              <strong>Responsible Disclosure:</strong> We encourage security researchers to report vulnerabilities 
              responsibly. We will work with you to understand and address security issues while protecting our users.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Related Legal Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Security Information"
            description="Additional policies and information related to security and data protection"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/privacy" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Privacy Policy</H3>
              <Paragraph className="text-gray-600">
                Learn about our privacy practices and how we protect personal information.
              </Paragraph>
            </Link>
            
            <Link href="/legal/data-processing" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Data Processing Agreement</H3>
              <Paragraph className="text-gray-600">
                Detailed data processing agreement outlining GDPR and CCPA compliance measures.
              </Paragraph>
            </Link>
            
            <Link href="/contact" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📞</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Contact Security Team</H3>
              <Paragraph className="text-gray-600">
                Get in touch with our security team for questions, reports, or security consultations.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}