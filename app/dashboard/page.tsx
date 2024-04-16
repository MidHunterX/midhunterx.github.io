import {ButtonSecondary} from '@/constituents/userinterfaces'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1>Greetings, this is the Dashboard Page!</h1>
      <ButtonSecondary href='/' text='Go back to Home'/>
    </div>
  );
}
