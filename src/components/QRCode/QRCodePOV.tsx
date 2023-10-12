import PovQR from './PovQR';

const QRCodePOV = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-x-1 items-start pt-4'>
      <div className='w-1/2 mx-auto md:m-0 md:w-full py-2'>
        <a
          href='https://pov.camera/qr/64887DC4-BD23-4B2E-A291-0237927112EE'
          target='_blank'>
          <PovQR />
        </a>
      </div>
      <div>
        <ul className='list-none text-left m-0 p-0'>
          <li>1. Picture with the Couple</li>
          <li>2. Picture with the Bride</li>
          <li>3. Picture with the Groom</li>
          <li>4. Picture of the Couple&apos;s first dance</li>
          <li>5. Your mirror selfie</li>
          <li>6. Picture at the Entrance Tunnel</li>
          <li>7. Picture of yourself drinking</li>
          <li>8. Picture with your group</li>
        </ul>
      </div>
      <div>
        <ul className='list-none text-left m-0 p-0'>
          <li>9. Picture of your food</li>
          <li>10. Picture at the After Party</li>
          <li>11. Picture of yourself taking a shot of Cuervo</li>
          <li>12. Picture of the Fireworks</li>
          <li>13. Picture of the Couple with Sparklers</li>
          <li>14. Picture of the Venue</li>
          <li>15. Picture of the Church</li>
        </ul>
      </div>
    </div>
  );
};

export default QRCodePOV;
