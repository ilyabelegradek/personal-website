import {
  dynamicImportCode,
  dynamicImportDescriptionKeys,
  fontCode,
  fontDescriptionKeys,
  imageDescriptionsKeys,
  imageTypescriptCode,
  lighthouseDescriptionKeys,
  speedInsightDescriptionKeys,
} from "@/src/constants/architectureConstants";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import PerformanceCard from "../cardWithContent";
import CustomCodeBlock from "../../reusable/customCodeBlock";
import PerformanceImage from "./performanceImage";
import ServerComponentsContent from "./serverComponentsContent";

export default async function ArchitecturePerformance() {
  const t = await getTranslations("Architecture");

  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <Typography sx={{ whiteSpace: "pre-line" }}>
        {t("arch_perf_intro")}
      </Typography>
      <PerformanceCard
        titleKey="arch_perf_server_title"
        content={<ServerComponentsContent />}
      />
      <div className="flex flex-col gap-8 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-8">
          <PerformanceCard
            titleKey="arch_perf_dynamic_title"
            descriptionKeys={dynamicImportDescriptionKeys}
            content={<CustomCodeBlock code={dynamicImportCode} />}
          />
          <PerformanceCard
            titleKey="arch_perf_font_title"
            descriptionKeys={fontDescriptionKeys}
            content={<CustomCodeBlock code={fontCode} />}
          />
        </div>
        <PerformanceCard
          titleKey="arch_perf_image_title"
          descriptionKeys={imageDescriptionsKeys}
          content={<CustomCodeBlock code={imageTypescriptCode} />}
        />
      </div>
      <PerformanceCard
        titleKey="arch_perf_testing_vercel_title"
        descriptionKeys={speedInsightDescriptionKeys}
        content={
          <PerformanceImage
            src="/images/speedInsightsScreenshot.png"
            alt="Vercel Speed Insights"
          />
        }
      />
      <PerformanceCard
        titleKey="arch_perf_testing_lighthouse_title"
        descriptionKeys={lighthouseDescriptionKeys}
        content={
          <PerformanceImage
            src="/images/lighthouseTestScreenshot.png"
            alt="Lighthouse Testing"
          />
        }
      />
    </div>
  );
}
