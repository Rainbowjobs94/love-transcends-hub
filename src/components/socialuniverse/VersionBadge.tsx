import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type VersionType = 'v1' | 'v2' | 'v3';

interface VersionBadgeProps {
  version: VersionType;
  className?: string;
}

const versionConfig: Record<VersionType, { label: string; className: string }> = {
  v1: {
    label: 'V1 Basic',
    className: 'bg-green-500/20 text-green-400 border-green-500/30',
  },
  v2: {
    label: 'V2 Growth',
    className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  },
  v3: {
    label: 'V3 Mockup',
    className: 'bg-red-500/20 text-red-400 border-red-500/30',
  },
};

export const VersionBadge = ({ version, className }: VersionBadgeProps) => {
  const config = versionConfig[version];

  return (
    <Badge
      variant="outline"
      className={cn('text-[10px] font-semibold', config.className, className)}
    >
      {config.label}
    </Badge>
  );
};

interface FeatureStatusProps {
  label: string;
  active?: boolean;
}

export const FeatureStatus = ({ label, active = true }: FeatureStatusProps) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div
        className={cn(
          'w-3 h-3 rounded-full',
          active ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-muted'
        )}
      />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
};
