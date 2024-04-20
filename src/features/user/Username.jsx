import { useSelector } from 'react-redux';
import { getUser } from './userSlice';

function Username() {
  const { username } = useSelector(getUser);
  if (!username) return;
  return <div className="hidden text-sm font-bold  md:block">{username}</div>;
}

export default Username;
