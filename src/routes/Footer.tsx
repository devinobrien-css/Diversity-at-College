import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <div className="bg-black p-8">
      <img
        src="/assets/img/Ideapress.svg"
        alt="logo"
        className="mx-auto w-32"
      />
      <p className="text-8 p-2 text-center font-light text-white">
        &copy; 2023 IdeaPress. All Rights Reserved.
      </p>
      <div className="mx-auto flex w-min gap-x-2 p-3 text-white">
        <Icon icon="mdi:facebook" width={22} />
        <Icon icon="mdi:twitter" width={22} />
        <Icon icon="mdi:instagram" width={22} />
        <Icon icon="mdi:amazon" width={22} />
      </div>
    </div>
  );
};
