import { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileData {
  reactionsSummary: any; 
  feedback: any; 
  emotionsSummary: any; 
}

interface ProfileContextProps {
  profileData: ProfileData | null;
  setProfile: (data: ProfileData) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const setProfile = (data: ProfileData) => {
    setProfileData(data);
  };

  return (
    <ProfileContext.Provider value={{ profileData, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
