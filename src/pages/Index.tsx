import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import HomeScreen from "@/screens/HomeScreen";
import ActivityScreen from "@/screens/ActivityScreen";
import HealthScreen from "@/screens/HealthScreen";
import FoodScreen from "@/screens/FoodScreen";
import WorkoutsScreen from "@/screens/WorkoutsScreen";
import SocialScreen from "@/screens/SocialScreen";
import ProfileScreen from "@/screens/ProfileScreen";

const screens: Record<string, React.FC> = {
  home: HomeScreen,
  activity: ActivityScreen,
  health: HealthScreen,
  food: FoodScreen,
  workouts: WorkoutsScreen,
  social: SocialScreen,
  profile: ProfileScreen,
};

const Index = () => {
  const [activeScreen, setActiveScreen] = useState("home");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const Screen = screens[activeScreen];

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="min-h-screen"
        >
          <Screen />
        </motion.div>
      </AnimatePresence>
      <BottomNav active={activeScreen} onNavigate={setActiveScreen} />
    </div>
  );
};

export default Index;
