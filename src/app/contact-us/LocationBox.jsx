import React from "react";

const LocationBox = () => {
  return (
    <div className="px-[20px] flex items-center gap-[30px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.780920647555!2d90.35897200000004!3d23.769106300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17cc73cedd3%3A0xa64a90f7a9e6475b!2sMediusware!5e0!3m2!1sen!2sbd!4v1648538886034!5m2!1sen!2sbd"
        className="w-[100%] h-[500px]"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        data-v-39f5b36e=""
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.9440139374324!2d-95.4001383845705!3d29.750333439360602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0a1be5dd0b5%3A0x8d962634f0cc573c!2s1903%20Commonwealth%20St%2C%20Houston%2C%20TX%2077006%2C%20USA!5e0!3m2!1sen!2sbd!4v1648538997419!5m2!1sen!2sbd"
        className="w-[100%] h-[500px]"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        data-v-39f5b36e=""
      ></iframe>
    </div>
  );
};

export default LocationBox;
