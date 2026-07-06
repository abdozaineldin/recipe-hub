import React from "react";

const SectionHeader = ({
  fTitle,
  sTitle,
  title,
  subtitle,
}: {
  fTitle?: string;
  sTitle?: string;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">
        {title ?? (
          <>
            {fTitle} <span className="text-recipe_orange">{sTitle}</span>
          </>
        )}
      </h2>

      {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
