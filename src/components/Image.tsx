"use client";

import { IKImage } from "imagekitio-next";

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const Image = ({ path, w, h, alt, className, tr }: ImageType) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  if (!urlEndpoint) {
    throw new Error('Error: Please add NEXT_PUBLIC_URL_ENDPOINT to .env or .env.local');
  }

  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
