import { motion } from "framer-motion";
import { Search, Plus, Apple, Coffee, Salad, Pizza } from "lucide-react";
import { useState } from "react";

const meals = [
  { name: "Oatmeal Bowl", cal: 320, protein: 12, carbs: 45, fat: 8, icon: Coffee, time: "8:30 AM" },
  { name: "Grilled Chicken Salad", cal: 450, protein: 35, carbs: 20, fat: 15, icon: Salad, time: "12:30 PM" },
  { name: "Apple & Almonds", cal: 180, protein: 5, carbs: 25, fat: 9, icon: Apple, time: "3:00 PM" },
];

const quickAdd = [
  { name: "Water", cal: 0, emoji: "💧" },
  { name: "Coffee", cal: 5, emoji: "☕" },
  { name: "Banana", cal: 105, emoji: "🍌" },
  { name: "Protein Shake", cal: 200, emoji: "🥤" },
];

const FoodScreen = () => {
  const [search, setSearch] = useState("");
  const totalCal = meals.reduce((s, m) => s + m.cal, 0);

  return (
    <div className="px-4 pt-12 pb-28 max-w-lg mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold text-foreground">Food Tracker</h1>
        <p className="text-sm text-muted-foreground">{totalCal} / 2,200 kcal today</p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-3 flex items-center gap-3"
      >
        <Search size={18} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />
      </motion.div>

      {/* Macros */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="gradient-primary rounded-3xl p-5 text-primary-foreground"
      >
        <p className="text-sm font-semibold mb-3 opacity-90">Today's Macros</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: "Protein", value: "52g", pct: 65 },
            { label: "Carbs", value: "90g", pct: 45 },
            { label: "Fat", value: "32g", pct: 50 },
          ].map((m, i) => (
            <div key={i}>
              <p className="text-lg font-bold">{m.value}</p>
              <p className="text-[10px] opacity-80">{m.label}</p>
              <div className="mt-1 h-1.5 rounded-full bg-primary-foreground/20">
                <motion.div
                  className="h-full rounded-full bg-primary-foreground/70"
                  initial={{ width: 0 }}
                  animate={{ width: `${m.pct}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Add */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Quick Add</h3>
        <div className="flex gap-2">
          {quickAdd.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card flex-1 p-3 flex flex-col items-center gap-1"
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-[10px] text-muted-foreground font-medium">{item.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Today's Meals</h3>
          <button className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center">
            <Plus size={16} className="text-primary-foreground" />
          </button>
        </div>
        {meals.map((meal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="glass-card p-4 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center">
              <meal.icon size={20} className="text-fitness-green" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{meal.name}</p>
              <p className="text-xs text-muted-foreground">{meal.time} • P:{meal.protein}g C:{meal.carbs}g F:{meal.fat}g</p>
            </div>
            <p className="text-sm font-bold text-foreground">{meal.cal}<span className="text-[10px] text-muted-foreground ml-0.5">kcal</span></p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodScreen;
