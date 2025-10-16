import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Feature {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  tooltip: string;
  gradientFrom: string;
  gradientTo: string;
}

const features: Feature[] = [
  {
    id: 'f1',
    icon: '🧬',
    title: 'Sulfation',
    subtitle: 'PTM Assays',
    tooltip: 'PTM enzyme assays for post-translational modifications',
    gradientFrom: '#ff6b6b',
    gradientTo: '#ee5a6f'
  },
  {
    id: 'f2',
    icon: '🛡️',
    title: 'Immune Response',
    subtitle: 'Disease Profiling',
    tooltip: 'Profiling immune responses: IBD, SLE, Bipolar, Kawasaki, Knock-out mice',
    gradientFrom: '#4ecdc4',
    gradientTo: '#44a08d'
  },
  {
    id: 'f3',
    icon: '🔬',
    title: 'Cell Recognition',
    subtitle: 'Cellular Interactions',
    tooltip: 'Neuron, Neutrophil, and Epithelial cell recognition studies',
    gradientFrom: '#f093fb',
    gradientTo: '#f5576c'
  },
  {
    id: 'f4',
    icon: '🧪',
    title: 'Nucleic Acid',
    subtitle: 'DNA/RNA Binding',
    tooltip: 'Protein-nucleic acid interactions: DNA, RNA, miRNA, damaged DNA, virus RNA',
    gradientFrom: '#4facfe',
    gradientTo: '#00f2fe'
  },
  {
    id: 'f5',
    icon: '🔗',
    title: 'Protein Interactions',
    subtitle: 'Binding Studies',
    tooltip: 'Protease ClpY and protein-protein/lipid interactions (PI(3,5)P2)',
    gradientFrom: '#43e97b',
    gradientTo: '#38f9d7'
  },
  {
    id: 'f6',
    icon: '💊',
    title: 'Small Molecules',
    subtitle: 'Drug Screening',
    tooltip: 'Protein-small molecule interactions: Antibiotics, AMP, oxidized peptides',
    gradientFrom: '#fa709a',
    gradientTo: '#fee140'
  }
];

// Calculate positions in a circle
const getCirclePosition = (index: number, total: number, radius: number = 42) => {
  const angle = (index * (360 / total) - 90) * (Math.PI / 180); // Start from top
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return { x, y };
};

interface ProteinArrayVisualizationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ProteinArrayVisualization({ 
  className,
  size = 'lg' 
}: ProteinArrayVisualizationProps) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const containerSizes = {
    sm: 'w-[400px] h-[400px]',
    md: 'w-[600px] h-[600px]',
    lg: 'w-[800px] h-[800px] max-lg:w-[600px] max-lg:h-[600px] max-md:w-[450px] max-md:h-[450px]'
  };

  const centerSizes = {
    sm: 'w-[120px] h-[120px] text-xl',
    md: 'w-[170px] h-[170px] text-2xl',
    lg: 'w-[220px] h-[220px] text-3xl max-lg:w-[180px] max-lg:h-[180px] max-lg:text-2xl'
  };

  const featureSizes = {
    sm: 'w-[80px] h-[80px]',
    md: 'w-[110px] h-[110px]',
    lg: 'w-[140px] h-[140px] max-lg:w-[110px] max-lg:h-[110px] max-md:w-[90px] max-md:h-[90px]'
  };

  const iconSizes = {
    sm: 'w-[30px] h-[30px] text-lg',
    md: 'w-[40px] h-[40px] text-xl',
    lg: 'w-[50px] h-[50px] text-2xl max-lg:w-[40px] max-lg:h-[40px] max-lg:text-xl'
  };

  return (
    <div className={cn('relative mx-auto', containerSizes[size], className)}>
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-gradient-to-tr from-accent/30 to-primary/10 blur-3xl" />

      {/* Rotating dotted ring */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-30"
        style={{ zIndex: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.3"
          strokeDasharray="1.5 3"
        />
      </motion.svg>
      {/* Center Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center text-center font-bold shadow-2xl z-10",
          centerSizes[size]
        )}
      >
        {/* Center glow */}
        <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_80px_20px_rgba(0,0,0,0.0)]" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
        <span className="leading-tight drop-shadow-sm">
          Protein
          <br />
          Array
        </span>
      </motion.div>

      {/* Feature Bubbles */}
      {features.map((feature, index) => {
        const position = getCirclePosition(index, features.length);
        return (
          <motion.div
            key={feature.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.1 * (index + 1),
              ease: "easeOut" 
            }}
            className={cn('absolute group', featureSizes[size])}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setHoveredFeature(feature.id)}
            onMouseLeave={() => setHoveredFeature(null)}
            whileHover={{ 
              scale: 1.15, 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            {/* Gradient border wrapper */}
            <div className="relative h-full w-full rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-2xl bg-card/80 backdrop-blur-xl text-center shadow-xl border border-white/30 dark:border-white/10">
                {/* Icon */}
                <motion.div
                  className={cn(
                    "rounded-full flex items-center justify-center mb-2 transition-transform duration-300 shadow-md",
                    iconSizes[size]
                  )}
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradientFrom}, ${feature.gradientTo})`
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="filter drop-shadow-sm">{feature.icon}</span>
                </motion.div>

                {/* Title */}
                <div className={cn(
                  "font-semibold text-foreground mb-1",
                  size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-sm max-md:text-xs'
                )}>
                  {feature.title}
                </div>

                {/* Subtitle */}
                <div className={cn(
                  "text-muted-foreground font-normal",
                  size === 'sm' ? 'text-[9px]' : size === 'md' ? 'text-xs' : 'text-xs max-md:text-[9px]'
                )}>
                  {feature.subtitle}
                </div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredFeature === feature.id ? 1 : 0,
                    y: hoveredFeature === feature.id ? 0 : 10
                  }}
                  className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full bg-popover text-popover-foreground px-4 py-3 rounded-xl shadow-xl pointer-events-none z-30 border border-border",
                    size === 'sm' ? 'text-[10px] max-w-[180px]' : size === 'md' ? 'text-xs max-w-[220px]' : 'text-xs max-w-[280px] whitespace-nowrap'
                  )}
                >
                  {feature.tooltip}
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-[6px] border-transparent"
                    style={{ borderTopColor: 'hsl(var(--popover))' }}
                  />
                </motion.div>

                {/* Hover glow ring */}
                <motion.div
                  className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-md bg-gradient-to-br from-primary/40 to-accent/30"
                  animate={{ opacity: hoveredFeature === feature.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
        </motion.div>
        );
      })}

      {/* Connection Lines with glow */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {features.map((_, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const cx = 50;
          const cy = 50;
          const r = 42;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          // Control point to create a nice curve
          const qx = (cx + x) / 2 + (Math.cos(angle) * 5);
          const qy = (cy + y) / 2 + (Math.sin(angle) * 5);
          const d = `M ${cx} ${cy} Q ${qx} ${qy} ${x} ${y}`;
          return (
            <g key={`path-${index}`} opacity="0.5">
              <path d={d} stroke="url(#lineGrad)" strokeWidth="0.6" fill="none" filter="url(#glow)" />
              <path d={d} stroke="white" strokeOpacity="0.2" strokeWidth="0.3" fill="none" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
