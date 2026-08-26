const animationStyles = `
  @keyframes kf_Orange_transform_0 {
    0%, 100% { transform: translateX(58.885px) translateY(39.094px) translateX(0) translateY(0) translate(58.619px, -57.793px) rotate(0rad) translate(-58.619px, 57.793px) rotate(-1.532rad); }
    50% { transform: translateX(58.885px) translateY(39.094px) translateX(161.999px) translateY(0) translate(58.619px, -57.793px) rotate(4.189rad) translate(-58.619px, 57.793px) rotate(-1.532rad); }
  }

  @keyframes kf_Red_transform_0 {
    0%, 100% { transform: translateX(199.045px) translateY(65.678px) translateX(0) translateY(0) translate(-0.192px, -83.587px) rotate(0rad) translate(0.192px, 83.587px) rotate(-2.348rad); }
    50% { transform: translateX(199.045px) translateY(65.678px) translateX(-88.001px) translateY(0) translate(-0.192px, -83.587px) rotate(2.618rad) translate(0.192px, 83.587px) rotate(-2.348rad); }
  }

  @keyframes kf_Blue_transform_0 {
    0%, 100% { transform: translateX(232.5px) translateY(77.556px) translateX(0) translateY(0) translate(12.769px, -85.028px) rotate(0rad) translate(-12.769px, 85.028px) rotate(-2.22rad); }
    50% { transform: translateX(232.5px) translateY(77.556px) translateX(-67.999px) translateY(0) translate(12.769px, -85.028px) rotate(3.32rad) translate(-12.769px, 85.028px) rotate(-2.22rad); }
  }

  #Orange, #Red, #Blue { transform-origin: 0 0; animation: 40s linear infinite; }
  #Orange { animation-name: kf_Orange_transform_0; }
  #Red { animation-name: kf_Red_transform_0; }
  #Blue { animation-name: kf_Blue_transform_0; }

  @media (prefers-reduced-motion: reduce) {
    #Orange, #Red, #Blue { animation: none; }
  }
`;

export function AnimatedHeader() {
  return (
    <svg
      viewBox="0 0 360 200"
      preserveAspectRatio="xMidYMin meet"
      role="presentation"
      aria-hidden="true"
      className="w-full blur-[112px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{animationStyles}</style>
      <path
        id="Orange"
        transform="matrix(0.0383792 -0.999263 0.999264 0.0383721 58.8848 39.0936)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.5366 2.35732C74.8546 -2.89503 87.6203 1.46142 96.5855 7.29548C105.534 13.1186 109.784 23.686 113.622 33.6485C117.274 43.1278 123 54.2627 118.111 63.1674C112.991 72.4932 96.4295 68.3244 89.9505 76.7631C82.7319 86.1651 91.4828 103.936 81.6864 110.609C72.9678 116.549 60.4879 108.63 51.667 102.843C44.0532 97.8486 43.66 86.3377 36.3699 80.8813C25.7878 72.961 5.75908 77.2093 0.962102 64.8927C-3.40579 53.6778 7.93869 40.4091 18.0871 33.939C27.5333 27.9166 41.675 39.1977 51.0009 32.9905C60.6042 26.5987 55.4871 8.02195 65.5366 2.35732Z"
        fill="#FB5607"
      />
      <path
        id="Red"
        transform="translate(199.045 65.6779) rotate(-134.503)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.4388 1.32806C63.8313 1.3776 70.9571 1.17894 78.1974 2.67827C87.9752 4.70306 98.9215 4.83679 106.251 11.6433C114.079 18.9119 121.622 30.1583 118.952 40.5229C116.121 51.5106 102.477 55.2662 93.3042 61.8962C87.4458 66.1303 78.868 66.4605 74.7899 72.4408C65.7732 85.6635 71.1191 109.672 56.4388 115.958C44.6427 121.008 31.8247 104.81 26.1032 93.2856C20.6904 82.3829 32.7559 68.2932 27.3584 57.3828C22.5156 47.5936 -0.160259 51.4523 0.000854276 40.5229C0.163348 29.4999 20.4682 32.1077 27.8513 23.9488C32.9786 18.2827 28.5236 7.12401 34.512 2.38553C40.359 -2.24114 48.9948 1.27818 56.4388 1.32806Z"
        fill="#FF006E"
      />
      <path
        id="Blue"
        transform="matrix(-0.604697 -0.796455 0.796461 -0.604691 232.5 77.5559)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.46 0.225495C71.1743 -2.60108 69.9733 21.994 80.0761 26.5459C90.5947 31.2851 105.029 17.4177 114.188 24.4328C122.264 30.6189 120.808 45.2412 116.545 54.4783C111.992 64.3438 98.2676 66.0574 91.1768 74.2903C87.9072 78.0865 89.3271 84.0588 87.1726 88.582C84.6791 93.8171 81.8101 98.8651 77.5817 102.833C72.5965 107.511 66.7446 110.959 60.46 113.649C52.0448 117.252 41.3539 127.306 34.4444 121.301C26.3204 114.242 33.0432 100.224 32.6349 89.4692C32.4321 84.1264 36.0554 77.7394 32.6345 73.6304C25.0388 64.5067 8.78447 64.7613 3.29936 54.2328C-1.33074 45.3454 -1.97265 28.8461 7.19673 24.8032C19.4301 19.4094 33.1266 41.3308 45.2662 35.7291C57.1029 30.2672 47.8551 3.5508 60.46 0.225495Z"
        fill="#3A86FF"
      />
    </svg>
  );
}
