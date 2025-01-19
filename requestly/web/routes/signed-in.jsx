import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function SignedIn() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/listings'); // or whatever path you want to redirect to
  }, []);

  return null;
}
