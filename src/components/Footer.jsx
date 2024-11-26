import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full py-4 text-white bg-gray-900 rounded-t-lg">
      <p className="text-sm text-center text-gray-400">Created by Sanjay</p>
      <div className="flex items-center justify-center gap-2 mt-2">
        <FaInstagram
          size={24}
          className="text-pink-500 transition-transform transform hover:text-pink-400 hover:scale-110"
        />
        <a
          href="https://www.instagram.com/sanjuuu_x18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-pink-400 transition-colors hover:text-pink-300"
        >
          @sanjuuu_x18
        </a>
      </div>
    </footer>
  );
}

export default Footer;
