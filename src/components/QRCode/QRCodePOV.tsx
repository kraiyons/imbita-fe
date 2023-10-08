import PovQR from './PovQR';

const QRCodePOV = () => {
  return (
    <div className='flex justify-center gap-4 items-center'>
      <div className='w-1/3'>
        <a
          href='https://pov.camera/qr/64887DC4-BD23-4B2E-A291-0237927112EE'
          target='_blank'>
          <PovQR />
        </a>
      </div>
      <div>
        <ol>
          <li>Mystery Moments</li>
          <li>Fantasy Frames</li>
          <li>Dreamy Details</li>
          <li>Secret Smiles</li>
          <li>Whimsical Wonders</li>
          <li>Timeless Treasures</li>
          <li>Magical Mingle</li>
          <li>Hidden Beauty</li>
          <li>Joyful Journeys</li>
          <li>Enchanted Embraces</li>
          <li>Captivating Colors</li>
          <li>Tender Whispers</li>
          <li>Storybook Scenes</li>
          <li>Celestial Charm</li>
          <li>Sparkling Surprises</li>
        </ol>
      </div>
    </div>
  );
};

export default QRCodePOV;
