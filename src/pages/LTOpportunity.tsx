import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shirt, 
  ShoppingBag, 
  Coffee, 
  Heart, 
  Mail, 
  ExternalLink,
  Package
} from 'lucide-react';

const products = [
  { 
    name: 'LT Classic Tee', 
    price: 25, 
    description: 'Rainbow logo t-shirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    icon: Shirt
  },
  { 
    name: 'LT Hoodie', 
    price: 45, 
    description: 'Cosmic purple hoodie',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    icon: Shirt
  },
  { 
    name: 'LT Snapback Cap', 
    price: 20, 
    description: 'Embroidered logo cap',
    sizes: ['One Size'],
    icon: Package
  },
  { 
    name: 'LT Zip Jacket', 
    price: 60, 
    description: 'Premium zip-up jacket',
    sizes: ['S', 'M', 'L', 'XL'],
    icon: Shirt
  },
  { 
    name: 'LT Tote Bag', 
    price: 15, 
    description: 'Eco-friendly canvas tote',
    sizes: ['One Size'],
    icon: ShoppingBag
  },
  { 
    name: 'LT Tank Top', 
    price: 30, 
    description: 'Summer rainbow tank',
    sizes: ['S', 'M', 'L', 'XL'],
    icon: Shirt
  },
  { 
    name: 'LT Beanie', 
    price: 18, 
    description: 'Warm winter beanie',
    sizes: ['One Size'],
    icon: Package
  },
  { 
    name: 'LT Rainbow Socks', 
    price: 12, 
    description: '3-pack rainbow socks',
    sizes: ['One Size'],
    icon: Package
  },
];

const LTOpportunity = () => {
  const handleOrder = (productName: string) => {
    const subject = encodeURIComponent(`LTApparel Order: ${productName}`);
    const body = encodeURIComponent(`Hi! I'd like to order:\n\nProduct: ${productName}\nSize: [Please specify]\nQuantity: 1\n\nPlease let me know the next steps for payment and shipping.`);
    window.location.href = `mailto:Rainbow@rainbowjobs.love?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen cosmic-bg relative overflow-hidden">
      <StarField />
      <Navigation />
      <LeftPanel />
      <RightPanel />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-10 h-10 text-cosmic-gold" />
            <h1 className="text-4xl md:text-5xl font-bold rainbow-text">LTOpportunity</h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Business & Commerce Ventures Supporting the LT Mission
          </p>
        </section>

        {/* Three Venture Cards */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* LTCakeCafe */}
            <Card className="glass-card border-cosmic-gold/30 hover:border-cosmic-gold/60 transition-colors">
              <CardHeader className="text-center">
                <Coffee className="w-12 h-12 text-cosmic-gold mx-auto mb-2" />
                <CardTitle className="text-cosmic-gold">LTCakeCafe</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-foreground/80">Not-for-profit cafe & art space</p>
                <ul className="text-xs text-foreground/70 space-y-1">
                  <li>• Live music & performance venue</li>
                  <li>• Community workshops & events</li>
                  <li>• Local artist showcases</li>
                </ul>
                <Badge className="bg-cosmic-gold/20 text-cosmic-gold border-cosmic-gold/30">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>

            {/* LTThrifty */}
            <Card className="glass-card border-cosmic-purple/30 hover:border-cosmic-purple/60 transition-colors">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-cosmic-purple mx-auto mb-2" />
                <CardTitle className="text-cosmic-purple">LTThrifty</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-foreground/80">Sustainable commerce & thrift</p>
                <ul className="text-xs text-foreground/70 space-y-1">
                  <li>• Eco-friendly shopping</li>
                  <li>• Community donations hub</li>
                  <li>• Upcycled fashion</li>
                </ul>
                <Badge className="bg-cosmic-purple/20 text-cosmic-purple border-cosmic-purple/30">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>

            {/* LTApparel */}
            <Card className="glass-card border-cosmic-teal/30 hover:border-cosmic-teal/60 transition-colors">
              <CardHeader className="text-center">
                <Shirt className="w-12 h-12 text-cosmic-teal mx-auto mb-2" />
                <CardTitle className="text-cosmic-teal">LTApparel</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-foreground/80">Mission-driven fashion</p>
                <ul className="text-xs text-foreground/70 space-y-1">
                  <li>• Wear your support merchandise</li>
                  <li>• Proceeds support LT initiatives</li>
                  <li>• Quality apparel & accessories</li>
                </ul>
                <Badge className="bg-cosmic-teal/20 text-cosmic-teal border-cosmic-teal/30">
                  Shop Below ↓
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* LTApparel Marketplace */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cosmic-teal mb-2">LTApparel Marketplace</h2>
            <p className="text-foreground/70">Wear your support. Every purchase helps build the LT mission.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.name} className="glass-card border-border/30 hover:border-cosmic-teal/50 transition-all hover:scale-[1.02]">
                  {/* Product Image Area */}
                  <div className="h-40 bg-gradient-to-br from-cosmic-purple/30 via-cosmic-blue/20 to-cosmic-teal/30 flex items-center justify-center rounded-t-lg">
                    <IconComponent className="w-16 h-16 text-foreground/40" />
                  </div>
                  
                  <CardContent className="pt-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      <p className="text-xs text-foreground/60">{product.description}</p>
                    </div>
                    
                    <Badge className="bg-cosmic-gold text-black font-bold">
                      ${product.price}
                    </Badge>
                    
                    <div className="text-xs text-foreground/60">
                      Sizes: {product.sizes.join(', ')}
                    </div>
                    
                    <Button 
                      onClick={() => handleOrder(product.name)}
                      className="w-full cosmic-button text-white text-sm"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Purchase Options */}
        <section className="container mx-auto px-4 py-12">
          <Card className="glass-card border-cosmic-gold/30 max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-cosmic-gold">How to Purchase</CardTitle>
              <p className="text-sm text-foreground/70">Contact us to complete your order</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-cosmic-gold/50 hover:bg-cosmic-gold/10"
                >
                  <a href="mailto:Rainbow@rainbowjobs.love">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Order
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-rainbow-blue/50 hover:bg-rainbow-blue/10"
                >
                  <a href="https://paypal.me" target="_blank" rel="noopener noreferrer">
                    PayPal
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-rainbow-green/50 hover:bg-rainbow-green/10"
                >
                  <a href="https://cash.app" target="_blank" rel="noopener noreferrer">
                    CashApp
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-cosmic-teal/50 hover:bg-cosmic-teal/10"
                >
                  <a href="https://venmo.com" target="_blank" rel="noopener noreferrer">
                    Venmo
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="text-center pt-4 border-t border-border/30">
                <p className="text-sm text-foreground/80">
                  <Heart className="w-4 h-4 inline mr-1 text-cosmic-purple" />
                  All proceeds support Love Transcends Reality initiatives
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LTOpportunity;
