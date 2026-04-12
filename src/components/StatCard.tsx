import { motion } from "framer-motion";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
  gradient?: string;
  delay?: number;
}

const StatCard = ({ icon, label, value, unit, gradient = "gradient-primary", delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="glass-card p-4 flex flex-col gap-2"
  >
    <div className={`w-9 h-9 rounded-xl ${gradient} flex items-center justify-center`}>
      {icon}
    </div>
    <div>
      <p className="text-xs text-muted-foreground font-medium">{label}</p>
      <p className="text-xl font-bold text-foreground">
        {value}
        {unit && <span className="text-sm font-medium text-muted-foreground ml-0.5">{unit}</span>}
      </p>
    </div>
  </motion.div>
);

export default StatCard;
