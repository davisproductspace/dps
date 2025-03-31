import React from "react";

interface ProfileGridSectionProps<T> {
  title?: string;
  subtitle?: string;
  data: T[];
  ProfileComponent: React.ComponentType<T>;
  // Optional: customize the grid container's classes
  containerClassName?: string;
}

const ProfileGridSection = <T,>({
  title,
  subtitle,
  data,
  ProfileComponent,
  containerClassName = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-10",
}: ProfileGridSectionProps<T>) => {
  return (
    <>
      {(title || subtitle) && (
        <div className="text-left max-w-3xl space-y-4 mt-10">
          {title && (
            <h2 className="text-[#3A3A3A] font-inter text-[20px] font-medium leading-normal">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mb-8">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={containerClassName}>
        {data.map((item, i) => (
          <ProfileComponent key={i} {...item} />
        ))}
      </div>
    </>
  );
};

export default ProfileGridSection;
