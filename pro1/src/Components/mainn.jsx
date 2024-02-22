import React from "react";
function main() {
  return (
    <div>
      <div className="text-center">
        <p className="text-base font-bold">Hileliul Baye</p>
        <p className="text-sm opacity-50">Software Enginner</p>
        <p className="text-xs opacity-75">Graphics Designer</p>
      </div>
      <div className="flex justify-between px-5  py-5  flex-wrap">
        <button className="text-black bg-white text-center flex-1  p-2 rounded-md text-xs mr-5 ">
          <i class="fa-regular fa-envelope"></i> Email
        </button>

        <button className="text-white bg-blue-700 flex-1  p-2 rounded-md text-xs">
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </button>
      </div>
      <div className="pl-3">
        <p>About</p>
        <p className="text-xxs px-2 opacity-75">
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the
        </p>
        <p>Interests</p>
        <p className="text-xxs px-2 opacity-75">
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the
        </p>
      </div>
    </div>
  );
}

export default main;
