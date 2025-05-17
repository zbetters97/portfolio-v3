import ExperienceCard from "../cards/ExperienceCard";
import "./experience-list.scss";

export default function ExperienceList() {
  return (
    <ul className="experience-list">
      <ExperienceCard
        tenure="MAR 2022 - present"
        url="https://www.golo.com"
        title="Application Support"
        company="GOLO LLC."
        actions={[
          "Assist with planning and executing large scale projects, deployments, and migrations.",
          "Configure and support fulfillment solutions, including Salesforce, AWS, and Shopify.",
          "Install, maintain, and repair Windows and Mac computers, printers, peripherals, and network devices as needed.",
          "Create and manage user accounts with appropriate access and permission.",
        ]}
        tags={["O365 Admin", "Azure AD", "Shopify", "Salesforce"]}
      />

      <ExperienceCard
        tenure="MAY 2018 - MAR 2022"
        url="https://www.pbfenergy.com/refineries/"
        title="IT Desktop Support"
        company="Delaware City Refinery"
        actions={[
          "Assist all employees with software and hardware-related issues, including Microsoft Access and Excel, SAP, and in-house developed software",
          "Develop and modify PDQ software packages for bulk installation.",
          "Design and develop Windows command scripts for operating system manipulation using PowerShell and Python.",
        ]}
        tags={["Excel", "Access", "PDQ"]}
      />
    </ul>
  );
}
