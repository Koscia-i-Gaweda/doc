import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
    logo: (
        <>
            <Image height={50} width={50} src="/logo.png" alt="Logo" />
            <span>Kością i Gawędą</span>
        </>
    ),
    // project: {
    //     link: "https://github.com/shuding/nextra-docs-template",
    // },
    // chat: {
    //     link: "https://discord.com",
    // },
    // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
    footer: {
        text: "Kością i Gawędą",
    },
    primaryHue: 30,
    primarySaturation: 50,
};

export default config;
