import { Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import CustomCodeBlock from "../../reusable/customCodeBlock";
import {
  muiNextjsIntegrationCode,
  nextintlCodeSample,
  serverComponentCode,
  serverComponentsDescriptionKeys,
} from "@/src/constants/architectureConstants";

export default async function ServerComponentsContent() {
  const t = await getTranslations("Architecture");

  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:gap-8">
      <div className="flex flex-col">
        {serverComponentsDescriptionKeys.map((descKey) => (
          <Typography
            className="leading-relaxed text-sm sm:text-base text-start"
            key={descKey}
          >
            {`• ${t(descKey)}`}
          </Typography>
        ))}
        <CustomCodeBlock code={serverComponentCode} />
      </div>
      <div className="flex flex-col">
        <Typography>{`• ${t("arch_perf_server_desc4")}`}</Typography>
        <CustomCodeBlock code={muiNextjsIntegrationCode} />
        <Typography>{`• ${t("arch_perf_server_desc5")}`}</Typography>
        <CustomCodeBlock code={nextintlCodeSample} />
      </div>
    </div>
  );
}
