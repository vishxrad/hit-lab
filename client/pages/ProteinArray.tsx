import { ProteinArrayVisualization } from "@/components/custom/ProteinArrayVisualization";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Beaker, BookOpen, Download, FlaskConical } from "lucide-react";

export default function ProteinArray() {
  const applications = [
    {
      category: "Post-Translational Modifications",
      description: "PTM enzyme assays including sulfation studies",
      icon: "🧬",
      color: "from-red-500 to-pink-600"
    },
    {
      category: "Disease Profiling",
      description: "Immune response analysis for IBD, SLE, Bipolar disorder",
      icon: "🛡️",
      color: "from-teal-500 to-emerald-600"
    },
    {
      category: "Cellular Recognition",
      description: "Neuron, neutrophil, and epithelial cell interaction studies",
      icon: "🔬",
      color: "from-purple-500 to-pink-600"
    },
    {
      category: "Nucleic Acid Binding",
      description: "DNA, RNA, miRNA, and viral RNA interactions",
      icon: "🧪",
      color: "from-blue-500 to-cyan-600"
    },
    {
      category: "Protein Interactions",
      description: "Protein-protein and protein-lipid binding studies",
      icon: "🔗",
      color: "from-green-500 to-teal-600"
    },
    {
      category: "Drug Screening",
      description: "Small molecule interactions with proteins",
      icon: "💊",
      color: "from-pink-500 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/5">
        <div className="absolute -left-20 top-[-6rem] hidden h-72 w-72 rounded-full bg-primary/20 blur-3xl md:block" />
        <div className="absolute bottom-[-8rem] right-[-4rem] hidden h-80 w-80 rounded-full bg-accent/20 blur-3xl lg:block" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <FlaskConical className="mr-2 h-3 w-3" />
              Research Applications
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Protein Array Applications
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Explore the diverse applications of our protein array technology in drug discovery, 
              disease research, and molecular interaction studies.
            </p>
          </div>

          {/* Interactive Visualization */}
          <div className="flex items-center justify-center py-12">
            <ProteinArrayVisualization size="lg" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" className="shadow-lg shadow-primary/10">
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 px-4 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-4">
              Key Application Areas
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our protein array platform enables breakthrough research across multiple domains
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4">
                    <div 
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${app.color} text-3xl shadow-lg`}
                    >
                      {app.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{app.category}</CardTitle>
                  <CardDescription className="text-base">{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:text-primary group-hover:translate-x-1 transition-all">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                <Beaker className="mr-2 h-3 w-3" />
                Technical Capabilities
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">
                Advanced Protein Array Technology
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Our protein array platform combines cutting-edge fabrication techniques with 
                  high-throughput screening capabilities to enable comprehensive molecular interaction studies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>High-density arrays with thousands of protein spots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Quantitative binding affinity measurements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Compatible with multiple detection methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Customizable for specific research needs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle>Platform Specifications</CardTitle>
                  <CardDescription>Technical performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Array Density</span>
                    <Badge variant="secondary">10,000+ spots</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Detection Range</span>
                    <Badge variant="secondary">pM - μM</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Turnaround Time</span>
                    <Badge variant="secondary">72 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Reproducibility</span>
                    <Badge variant="secondary">CV &lt; 10%</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partner with us to leverage our protein array platform for your next breakthrough discovery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-lg shadow-primary/10">
              <BookOpen className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Publications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
