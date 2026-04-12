import { Home, Activity, Heart, UtensilsCrossed, Dumbbell, Users, User } from "lucide-react";
import { motion } from "framer-motion";

interface BottomNavProps {
  active: string;
  onNavigate: (screen: string) => void;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "activity", icon: Activity, label: "Activity" },
  { id: "health", icon: Heart, label: "Health" },
  { id: "food", icon: UtensilsCrossed, label: "Food" },
  { id: "workouts", icon: Dumbbell, label: "Workouts" },
  { id: "social", icon: Users, label: "Social" },
  { id: "profile", icon: User, label: "Profile" },
];

const BottomNav = ({ active, onNavigate }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="glass-card rounded-none border-t border-x-0 border-b-0 px-1 pb-5 pt-2">
        <div className="flex items-center justify-around max-w-lg mx-auto">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center gap-0.5 px-2 py-1 relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -top-2 w-8 h-1 rounded-full gradient-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <item.icon
                  size={22}
                  className={isActive ? "text-primary" : "text-muted-foreground"}
                />
                <span
                  className={`text-[10px] font-medium ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
