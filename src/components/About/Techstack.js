import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
    SiTypescript,
    SiDocker,
    SiKubernetes,
    SiGraphql,
    SiTailwindcss,
    SiAmazonaws,
    SiLinux
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
            </Col>
        </Row>
    );
}

export default Techstack;
