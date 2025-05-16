import ExperienceCard from "../cards/ExperienceCard";

export default function ExperienceList() {
  return (
    <ul>
      <ExperienceCard
        tenure="MAR 2022 - present"
        url="https://www.golo.com"
        title="Application Support"
        company="GOLO LLC."
        actions={[
          "Assist with planning and executing large-scale projects, deployments, and migrations.",
          "Configure and support fulfillment solutions, including Salesforce, AWS, and Shopify.",
          "Troubleshooting",
        ]}
        tags={["O365 Admin", "Azure AD", "Shopify", "Salesforce"]}
      />

      <ExperienceCard
        tenure="MAY 2018 - MAR 2022"
        url="https://www.pbfenergy.com/refineries/"
        title="IT Desktop Support"
        company="Delaware City Refinery"
        actions={["Support", "Training", "Troubleshooting"]}
        tags={["Excel", "Access", "PDQ"]}
      />
    </ul>
  );
}
