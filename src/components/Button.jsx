import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Button1({message, handler}) {
  return (
      <Button onClick={handler} variant="contained" sx={{width:"100%", backgroundColor:"#3739EC"}}>{message}</Button>
  );
}
