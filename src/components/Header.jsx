import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { useState, useEffect } from 'react';

const Header = () => {
  const { user, logout } = useAuth();
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return;
      
      try {
        const { data } = await supabase
          .from('user_profiles')
          .select('display_name')
          .eq('user_id', user.id)
          .single();

        if (data) {
          setDisplayName(data.display_name);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [user]);

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-20 bg-white dark:bg-slate-900 shadow-md flex items-center justify-between px-6 border-b border-gray-200 dark:border-slate-800"
    >
      <div>
        <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <User className="h-5 w-5 text-primary" />
          <span>{displayName || user?.email || 'Usuário'}</span>
        </div>
        <Button variant="ghost" size="sm" onClick={logout} className="text-red-600 hover:bg-red-100 hover:text-red-700 dark:hover:bg-red-900 dark:hover:text-red-400">
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;