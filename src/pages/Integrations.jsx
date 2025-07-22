import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Code, 
  Globe, 
  Mail, 
  ShoppingCart, 
  BarChart3, 
  MessageSquare, 
  Database,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showConnected, setShowConnected] = useState(false);

  const integrations = [
    {
      id: 1,
      name: 'Mailchimp',
      description: 'Sync verified emails directly to your Mailchimp campaigns and lists',
      category: 'email-marketing',
      logo: '📧',
      rating: 4.8,
      users: '2.5M+',
      connected: true,
      featured: true,
      tags: ['Popular', 'Email Marketing'],
      benefits: ['Auto-sync lists', 'Real-time verification', 'Bounce reduction']
    },
    {
      id: 2,
      name: 'Shopify',
      description: 'Verify customer emails at checkout to reduce cart abandonment',
      category: 'ecommerce',
      logo: '🛍️',
      rating: 4.9,
      users: '1.8M+',
      connected: false,
      featured: true,
      tags: ['E-commerce', 'Checkout'],
      benefits: ['Checkout validation', 'Customer insights', 'Order confirmation']
    },
    {
      id: 3,
      name: 'HubSpot',
      description: 'Clean your CRM contacts and improve email deliverability',
      category: 'crm',
      logo: '🎯',
      rating: 4.7,
      users: '950K+',
      connected: true,
      featured: true,
      tags: ['CRM', 'Sales'],
      benefits: ['Contact cleaning', 'Lead scoring', 'Pipeline accuracy']
    },
    {
      id: 4,
      name: 'Zapier',
      description: 'Connect email verification to 5000+ apps with automated workflows',
      category: 'automation',
      logo: '⚡',
      rating: 4.6,
      users: '3.2M+',
      connected: false,
      featured: false,
      tags: ['Automation', 'Workflows'],
      benefits: ['5000+ app connections', 'Custom triggers', 'No-code setup']
    },
    {
      id: 5,
      name: 'Salesforce',
      description: 'Validate leads and contacts in your Salesforce org automatically',
      category: 'crm',
      logo: '☁️',
      rating: 4.8,
      users: '1.2M+',
      connected: false,
      featured: false,
      tags: ['Enterprise', 'CRM'],
      benefits: ['Lead validation', 'Data quality', 'Sales efficiency']
    },
    {
      id: 6,
      name: 'WordPress',
      description: 'Add email verification to your WordPress forms and registrations',
      category: 'cms',
      logo: '📝',
      rating: 4.5,
      users: '800K+',
      connected: true,
      featured: false,
      tags: ['CMS', 'Forms'],
      benefits: ['Form validation', 'User registration', 'Comment filtering']
    },
    {
      id: 7,
      name: 'Klaviyo',
      description: 'Enhance your email marketing with verified subscriber lists',
      category: 'email-marketing',
      logo: '💌',
      rating: 4.7,
      users: '600K+',
      connected: false,
      featured: false,
      tags: ['Email Marketing', 'Segmentation'],
      benefits: ['List hygiene', 'Deliverability boost', 'Engagement tracking']
    },
    {
      id: 8,
      name: 'Stripe',
      description: 'Verify customer emails during payment processing',
      category: 'payments',
      logo: '💳',
      rating: 4.9,
      users: '2.1M+',
      connected: false,
      featured: false,
      tags: ['Payments', 'Fraud Prevention'],
      benefits: ['Payment validation', 'Fraud reduction', 'Customer verification']
    },
    {
      id: 4,
      name: 'Zapier',
      description: 'Connect email verification to 5000+ apps with automated workflows',
      category: 'automation',
      logo: '⚡',
      rating: 4.6,
      users: '3.2M+',
      connected: false,
      featured: false,
      tags: ['Automation', 'Workflows'],
      benefits: ['5000+ app connections', 'Custom triggers', 'No-code setup']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, count: integrations.length },
    { id: 'email-marketing', name: 'Email Marketing', icon: Mail, count: integrations.filter(i => i.category === 'email-marketing').length },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: integrations.filter(i => i.category === 'ecommerce').length },
    { id: 'crm', name: 'CRM & Sales', icon: BarChart3, count: integrations.filter(i => i.category === 'crm').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: integrations.filter(i => i.category === 'automation').length },
    { id: 'cms', name: 'CMS & Forms', icon: Code, count: integrations.filter(i => i.category === 'cms').length },
    { id: 'payments', name: 'Payments', icon: Database, count: integrations.filter(i => i.category === 'payments').length }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesConnection = !showConnected || integration.connected;
    return matchesSearch && matchesCategory && matchesConnection;
  });

  const featuredIntegrations = integrations.filter(i => i.featured);

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" 
        rel="stylesheet" 
      />

      <Navbar/>
      
      <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #c70649ff 0%, #d13169ff 100%)'}}>
        {/* Hero Section */}
        <div className="bg-gradient text-white py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
          <div className="container py-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                <h1 className="display-3 fw-bold mb-4">
                  Powerful <span className=" " style={{color:"#28a645"}}>Integrations</span>
                </h1>
                <p className="lead fs-4 mb-5 text-light">
                  Connect your email verification with the tools you already use. 
                  Seamless integrations with 50+ popular platforms to streamline your workflow.
                </p>
                <div className="row justify-content-center g-4">
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={24} className="text-success me-2" />
                      <span className="fs-5">No coding required</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <Zap size={24} className="text-warning me-2" />
                      <span className="fs-5">5-minute setup</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <Users size={24} className="text-info me-2" />
                      <span className="fs-5">Trusted by 10M+ users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Integrations */}
        <div className="py-5 bg-white">
          <div className="container py-5">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2 className="display-5 fw-bold text-dark mb-4">Most Popular Integrations</h2>
                <p className="lead text-muted">Start with these fan favorites</p>
              </div>
            </div>
            
            <div className="row g-4">
              {featuredIntegrations.map((integration) => (
                <div key={integration.id} className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow border-0 position-relative overflow-hidden w-100">
                    <div className="card-body p-4 text-center ">
                      <div className="display-1 mb-3">{integration.logo}</div>
                      <h4 className="card-title fw-bold mb-3">{integration.name}</h4>
                      <p className="card-text text-muted mb-4">{integration.description}</p>
                      
                      <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="me-4">
                          <Star className="text-warning" size={16} />
                          <span className="fw-semibold ms-1">{integration.rating}</span>
                        </div>
                        <div>
                          <Users className="text-muted" size={16} />
                          <span className="text-muted ms-1">{integration.users} users</span>
                        </div>
                      </div>
                      
                      
                      
                      {integration.connected ? (
                        <button className="btn btn-success btn-lg w-100 d-flex align-items-center justify-content-center">
                          <CheckCircle size={20} className="me-2" />
                          Connected
                        </button>
                      ) : (
                        <button className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center">
                          <Play size={20} className="me-2" />
                          Connect Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Integrations */}
        <div className="py-5 bg-light">
          <div className="container py-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h2 className="display-5 fw-bold text-dark mb-4">All Integrations</h2>
              </div>
            </div>
            
            {/* Search and Filters */}
            <div className="card shadow-sm border-0 mb-5 "style={{width:"100%"}}  >  
              <div className="card-body p-4">
                <div className="row g-3 align-items-center mb-4">
                  <div className="col-lg-8">
                    <div className="position-relative">
                      <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={20} />
                      <input
                        type="text"
                        className="form-control form-control-lg ps-5"
                        placeholder="Search integrations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="col-lg-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="connectedOnly"
                        checked={showConnected}
                        onChange={(e) => setShowConnected(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="connectedOnly">
                        Connected only
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Category Filters */}
                <div className="d-flex flex-wrap gap-2 pl-5">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`btn d-flex align-items-center ${
                          selectedCategory === category.id
                            ? 'btn-primary'
                            : 'btn-outline-secondary'
                        }`}
                      >
                        <IconComponent size={18} className="me-2" />
                        {category.name}
                        {/* <span className="badge bg-light text-dark ms-2">
                          {category.count}
                        </span> */}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Integration Grid */}
            <div className="row g-4">
              {filteredIntegrations.map((integration) => (
                <div key={integration.id} className="col-xl-4 col-lg-6 col-md-6 ">
                  <div className="card h-100 shadow-sm border-1 position-relative w-100">
                    <div className="card-body p-4 ">
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="d-flex align-items-center ">
                          <div className="me-3" style={{fontSize: '2rem'}}>{integration.logo}</div>
                          <div>
                            <h5 className="card-title fw-bold mb-1">{integration.name}</h5>
                            <div className="d-flex align-items-center small text-muted">
                              <Star className="text-warning" size={14} />
                              <span className="fw-semibold ms-1 me-2">{integration.rating}</span>
                              <span>•</span>
                              <span className="ms-2">{integration.users}</span>
                            </div>
                          </div>
                        </div>
                        {integration.connected && (
                          <CheckCircle className="text-success" size={20} />
                        )}
                      </div>
                      
                      <p className="card-text text-muted mb-3" style={{fontSize: '0.9rem'}}>
                        {integration.description}
                      </p>
                      
                       
                      
                      <div className="d-flex align-items-center justify-content-between mt-auto">
                        {integration.connected ? (
                          <span className="text-success fw-medium small d-flex align-items-center">
                            <CheckCircle size={16} className="me-1" />
                            Connected
                          </span>
                        ) : (
                          <button className="btn btn-link text-primary p-0 fw-medium small text-decoration-none d-flex align-items-center">
                            Connect
                            <ArrowRight size={16} className="ms-1" />
                          </button>
                        )}
                        
                        <button className="btn btn-link text-muted p-0">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-5">
                <div className="display-1 mb-4">🔍</div>
                <h4 className="fw-semibold text-dark mb-3">No integrations found</h4>
                <p className="text-muted">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-5 text-white" style={{background: 'linear-gradient(135deg, #8c0031 0%, #53001dff 100%)'}}>
          <div className="container py-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h3 className="display-6 fw-bold mb-4">Don't see your favorite tool?</h3>
                <p className="lead mb-5">
                  We're constantly adding new integrations. Request yours or build a custom connection with our API.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <button className="btn btn-light btn-lg px-5 fw-semibold">
                    Request Integration
                  </button>
                  <button className="btn btn-outline-light btn-lg px-5 fw-semibold">
                    View API Docs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Integrations;