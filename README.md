# BukNEST - Safe, Smart, Supportive

![BukNEST Logo](src/frontend/public/icon.svg)
![BukNEST Logo](src/frontend/public/logo-name.svg)

**A comprehensive platform connecting families with certified professionals for children with special needs through AI-powered guidance and compassionate care.**

---

## 🌟 **Overview**

BukNEST is a revolutionary platform designed to bridge the gap between families seeking developmental support for their children and qualified professionals who can provide that care. Our mission is to create a safe nest for every child with special needs, ensuring no family feels alone in their journey.

### **Core Philosophy**

- **Safe**: Verified professionals and secure platform
- **Smart**: AI-powered initial assessments and recommendations
- **Supportive**: Compassionate community and ongoing guidance

---

## Presentation Link

[Pitch Deck](https://www.canva.com/design/DAGuE4YOuVw/OuLQDkOtTg49kh8SlpzV0g/view?utm_content=DAGuE4YOuVw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he44a00f556)

[PROJECT SUMMARY, OVERVIEW, SCREENSHOT](https://drive.google.com/file/d/1uCFGX5E4iareQ3XtGiv_cMIYuZM88tOC/view?usp=sharing)

---

## 🎯 **Key Features**

### **1. AI-Powered Assessment (NESTY)**

- **Conversational AI**: Friendly chatbot for initial developmental screening
- **Personalized Insights**: Tailored recommendations based on child's needs
- **Early Intervention**: Identifies concerns when interventions are most effective
- **No Registration Required**: Free, confidential, and accessible to all

### **2. Professional Network**

- **Verified Experts**: Licensed speech therapists, occupational therapists, developmental pediatricians
- **Comprehensive Profiles**: Detailed credentials, specializations, and experience
- **Rating System**: Community-driven reviews and ratings
- **Flexible Services**: Home visits and online consultations

### **3. Smart Booking System**

- **Integrated Scheduling**: Book sessions directly through the platform
- **Multiple Session Types**: Home visits, online consultations, assessments
- **Calendar Management**: Professional and parent calendar integration
- **Automated Reminders**: Email and SMS notifications

### **4. Progress Tracking**

- **Milestone Monitoring**: Track developmental achievements
- **Session Reports**: Detailed progress notes from professionals
- **Visual Analytics**: Charts and graphs showing improvement over time
- **Goal Setting**: Collaborative goal planning between parents and professionals

### **5. Multi-Role Dashboard System**

- **Parent Dashboard**: Child profiles, upcoming sessions, progress tracking
- **Professional Dashboard**: Client management, session scheduling, earnings tracking
- **Admin Dashboard**: Platform oversight, user management, analytics

---

## 👥 **User Roles & Capabilities**

### **Parents**

- Create and manage child profiles
- Access AI assessment with NESTY
- Browse and book professional services
- Track child's progress and milestones
- Manage session schedules and payments
- Communicate with professionals

### **Professionals**

- Create detailed professional profiles
- Upload credentials for verification
- Manage service offerings and pricing
- Accept/decline booking requests
- Track client progress and session history
- Generate reports and documentation

### **Administrators**

- Monitor platform health and usage
- Verify professional credentials
- Manage user accounts and permissions
- Generate analytics and reports
- Handle disputes and support requests

---

## 🏗️ **Technical Architecture**

### **Frontend Stack**

- **React 18**: Modern component-based UI framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Beautiful, customizable icons
- **Vite**: Fast build tool and development server

### **Design System**

- **Color Palette**: Pink (#CB748E) and Green (#698a60) gradient theme
- **Typography**: Kalam (handwritten) and Calibri (readable) fonts
- **Components**: Reusable, accessible UI components
- **Responsive Design**: Mobile-first approach with breakpoints

### **State Management**

- **React Hooks**: useState, useEffect for local state
- **Props Drilling**: Simple state passing for demo purposes
- **Context Ready**: Prepared for React Context implementation

### **Database Integration**

- **Supabase Ready**: Schema designed for PostgreSQL
- **Row Level Security**: Secure data access patterns
- **Real-time Subscriptions**: Live updates capability
- **File Storage**: Document and image upload support

---

## 📊 **Database Schema**

### **Core Tables**

#### **user_profiles**

```sql
- id (uuid, primary key)
- role (enum: parent, professional, admin)
- full_name (text)
- phone_number (text)
- address (text)
- avatar_url (text)
- is_verified (boolean)
- created_at (timestamp)
- updated_at (timestamp)
```

#### **children**

```sql
- id (uuid, primary key)
- parent_id (uuid, foreign key)
- name (text)
- age (integer)
- date_of_birth (date)
- conditions (text array)
- notes (text)
- created_at (timestamp)
- updated_at (timestamp)
```

#### **professional_profiles**

```sql
- id (uuid, primary key, foreign key to user_profiles)
- title (text)
- specializations (text array)
- hourly_rate (numeric)
- experience_years (integer)
- bio (text)
- credentials (text array)
- availability_days (text array)
- is_verified (boolean)
- documents_uploaded (boolean)
```

#### **sessions**

```sql
- id (uuid, primary key)
- professional_id (uuid, foreign key)
- child_id (uuid, foreign key)
- parent_id (uuid, foreign key)
- session_date (date)
- session_time (time)
- duration_minutes (integer)
- type (enum: home_visit, online)
- status (enum: scheduled, completed, cancelled, rescheduled)
- notes (text)
- address (text)
- meeting_link (text)
```

#### **assessments**

```sql
- id (uuid, primary key)
- child_id (uuid, foreign key)
- type (enum: ai_preassessment, professional)
- concerns (text array)
- recommendations (text array)
- severity (enum: mild, moderate, severe)
- suggested_professionals (text array)
- notes (text)
- created_at (timestamp)
```

---

## 🎨 **Design Features**

### **Visual Identity**

- **Brand Colors**: Pink-to-green gradient representing growth and care
- **Logo System**: Distinctive icon and wordmark
- **Pattern Elements**: Organic shapes and floating decorative elements
- **Animation**: Subtle hover effects and micro-interactions

### **User Experience**

- **Intuitive Navigation**: Clear menu structure and breadcrumbs
- **Progressive Disclosure**: Information revealed as needed
- **Accessibility**: WCAG compliant design patterns
- **Mobile Optimization**: Touch-friendly interface design

### **Component Library**

- **Cards**: Information display with consistent styling
- **Modals**: Overlay dialogs for forms and details
- **Forms**: Accessible input fields with validation
- **Buttons**: Consistent action elements with states
- **Tables**: Data display with sorting and filtering

---

## 🔐 **Security & Privacy**

### **Data Protection**

- **Encryption**: All sensitive data encrypted at rest and in transit
- **HIPAA Compliance**: Healthcare data protection standards
- **Access Controls**: Role-based permissions and authentication
- **Audit Trails**: Complete logging of data access and changes

### **Professional Verification**

- **Identity Verification**: Government ID and selfie requirements
- **License Validation**: Professional credential verification
- **Background Checks**: Criminal background screening
- **Ongoing Monitoring**: Regular re-verification processes

### **Platform Safety**

- **Content Moderation**: AI and human review of user content
- **Reporting System**: Easy reporting of inappropriate behavior
- **Emergency Protocols**: Crisis intervention procedures
- **Insurance Coverage**: Professional liability protection

---

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for real-time features

### **Installation**

```bash
# Clone the repository
git clone https://github.com/zhorEl/icp-buknest.git

# Navigate to project directory
cd src/frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build Frontend
npm run build

# Go back to root
cd ../..
dfx deploy
```

### **Environment Setup**

```bash
# Copy environment template
cp .env.example .env

# Configure environment variables
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### **Development Commands**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📱 **User Journeys**

### **Parent Journey**

1. **Discovery**: Learn about BukNEST through marketing or referral
2. **Assessment**: Complete AI-powered screening with NESTY
3. **Professional Search**: Browse verified professionals by specialization
4. **Booking**: Schedule sessions (home visit or online)
5. **Session Management**: Attend sessions and track progress
6. **Ongoing Support**: Regular check-ins and milestone tracking

### **Professional Journey**

1. **Registration**: Create account and professional profile
2. **Verification**: Upload credentials and complete identity verification
3. **Profile Setup**: Configure services, rates, and availability
4. **Client Acquisition**: Receive and accept booking requests
5. **Service Delivery**: Conduct sessions and document progress
6. **Practice Growth**: Build reputation through reviews and referrals

### **Admin Journey**

1. **Platform Monitoring**: Track usage metrics and system health
2. **User Management**: Review and approve professional applications
3. **Quality Assurance**: Monitor service quality and user satisfaction
4. **Support Operations**: Handle user inquiries and disputes
5. **Business Intelligence**: Generate reports and insights

---

## 🎯 **Core Workflows**

### **AI Assessment Workflow**

```
User Input → NESTY Processing → Concern Analysis →
Recommendation Generation → Professional Matching →
Booking Facilitation
```

### **Professional Verification Workflow**

```
Application Submission → Document Upload →
Identity Verification → License Validation →
Background Check → Manual Review →
Approval/Rejection → Platform Access
```

### **Session Booking Workflow**

```
Professional Discovery → Service Selection →
Date/Time Selection → Payment Processing →
Confirmation → Reminder System →
Session Execution → Progress Documentation
```

---

## 🔧 **Configuration Options**

### **Professional Settings**

- **Service Offerings**: Customizable therapy services and rates
- **Availability**: Flexible scheduling preferences
- **Communication**: Preferred contact methods and response times
- **Documentation**: Session note templates and report formats

### **Parent Settings**

- **Child Profiles**: Multiple child management
- **Notification Preferences**: Email, SMS, and in-app alerts
- **Privacy Controls**: Data sharing and visibility settings
- **Payment Methods**: Multiple payment option support

### **Platform Settings**

- **Regional Customization**: Local regulations and requirements
- **Language Support**: Multi-language interface capability
- **Integration Options**: Third-party service connections
- **Compliance Features**: HIPAA, GDPR, and local privacy laws

---

## 📈 **Analytics & Reporting**

### **Parent Analytics**

- **Progress Tracking**: Visual charts of child development
- **Session History**: Complete record of therapy sessions
- **Milestone Achievements**: Developmental goal completion
- **Cost Analysis**: Therapy investment and insurance coverage

### **Professional Analytics**

- **Client Management**: Caseload overview and progress tracking
- **Business Metrics**: Earnings, session completion rates
- **Performance Indicators**: Client satisfaction and outcomes
- **Professional Development**: Continuing education tracking

### **Platform Analytics**

- **User Engagement**: Platform usage and feature adoption
- **Quality Metrics**: Service satisfaction and outcomes
- **Business Intelligence**: Revenue, growth, and market insights
- **Operational Metrics**: System performance and reliability

---

## 🌐 **Deployment & Hosting**

### **Production Deployment**

- **Netlify**: Static site hosting with CDN
- **Supabase**: Backend-as-a-Service for database and auth
- **Custom Domain**: Professional branding and SSL certificates
- **Performance Optimization**: Image optimization and caching

### **Monitoring & Maintenance**

- **Error Tracking**: Real-time error monitoring and alerts
- **Performance Monitoring**: Page load times and user experience
- **Security Scanning**: Vulnerability assessment and patching
- **Backup Systems**: Regular data backups and disaster recovery

---

## 🤝 **Contributing**

### **Development Guidelines**

- **Code Style**: ESLint and Prettier configuration
- **Component Structure**: Atomic design principles
- **Testing Strategy**: Unit tests and integration tests
- **Documentation**: Inline comments and README updates

### **Pull Request Process**

1. Fork the repository
2. Create feature branch
3. Implement changes with tests
4. Update documentation
5. Submit pull request with description

---

## 📞 **Support & Contact**

### **User Support**

- **Help Center**: Comprehensive FAQ and guides
- **Live Chat**: Real-time support during business hours
- **Email Support**: support@buknest.com
- **Phone Support**: +63 9913410186

### **Professional Support**

- **Onboarding**: Dedicated professional success team
- **Training Resources**: Video tutorials and best practices
- **Technical Support**: Platform troubleshooting and optimization
- **Business Development**: Growth strategies and marketing support

### **Emergency Contacts**

- **Crisis Intervention**: 24/7 emergency support hotline
- **Technical Emergencies**: Critical system issue reporting
- **Security Incidents**: Data breach and security concern reporting

---

## 📄 **Legal & Compliance**

### **Terms of Service**

- **User Agreements**: Platform usage terms and conditions
- **Professional Standards**: Service quality requirements
- **Liability Coverage**: Insurance and indemnification policies
- **Dispute Resolution**: Mediation and arbitration procedures

### **Privacy Policy**

- **Data Collection**: Information gathering and usage policies
- **Data Protection**: Security measures and access controls
- **User Rights**: Data portability and deletion requests
- **Cookie Policy**: Tracking and analytics disclosures

### **Compliance Standards**

- **HIPAA**: Healthcare data protection compliance
- **COPPA**: Children's online privacy protection
- **ADA**: Accessibility compliance and accommodations
- **State Regulations**: Local licensing and practice requirements

---

## 🔮 **Future Roadmap**

### **Phase 1: Core Platform** ✅

- AI assessment system
- Professional verification
- Basic booking and scheduling
- Progress tracking

### **Phase 2: Enhanced Features** 🚧

- Mobile application
- Video conferencing integration
- Advanced analytics dashboard
- Insurance integration

### **Phase 3: Scale & Growth** 📋

- Multi-language support
- International expansion
- API for third-party integrations
- Advanced AI capabilities

### **Phase 4: Innovation** 🔮

- VR/AR therapy tools
- Predictive analytics
- Personalized learning paths
- Community features

---

## 📊 **Success Metrics**

### **Platform KPIs**

- **User Growth**: Monthly active users and retention rates
- **Professional Network**: Number of verified professionals
- **Session Volume**: Completed therapy sessions per month
- **User Satisfaction**: Net Promoter Score and reviews

### **Impact Metrics**

- **Child Outcomes**: Developmental progress measurements
- **Family Satisfaction**: Quality of life improvements
- **Professional Success**: Practice growth and satisfaction
- **Community Health**: Regional developmental support coverage

---

## 🙏 **Acknowledgments**

### **Development Team**

- **Frontend Development**: React and TypeScript implementation
- **UI/UX Design**: User experience and visual design
- **Backend Architecture**: Database and API design
- **Quality Assurance**: Testing and validation

### **Advisory Board**

- **Clinical Experts**: Developmental pediatricians and therapists
- **Technology Advisors**: AI and healthcare technology specialists
- **Legal Counsel**: Healthcare law and privacy experts
- **Community Representatives**: Parent advocates and disability rights organizations

### **Special Thanks**

- **Beta Families**: Early adopters who provided valuable feedback
- **Professional Partners**: Therapists who helped shape the platform
- **Technology Partners**: Supabase, Netlify, and open-source contributors
- **Funding Partners**: Investors and grants supporting our mission

---

## 📞 **Contact Information**

**BukNEST Team**

- **Website**: https://buknest.com
- **Email**: hello@buknest.com
- **Phone**: +63 9913410186
- **Address**: Valencia City, Bukidnon, Philippines

**Social Media**

- **Facebook**: @BukNESTOfficial
- **Twitter**: @BukNEST
- **Instagram**: @buknest_official
- **LinkedIn**: BukNEST

---

_Built with ❤️ for families and children with special needs_

**Version**: 1.0.0  
**Last Updated**: January 2024  
**License**: MIT License
