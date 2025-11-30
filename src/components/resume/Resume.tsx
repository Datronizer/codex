import { FC, useMemo } from "react";
import resume from "./json/siennas-resume-nov-23.json"; // Replace this with proper back-end information
import { EducationDto } from "./dtos/Education.dto";
import { formatShortDateRange } from "../../util";
import { WorkDto } from "./dtos/Work.dto";
import "./Resume.scss";

export const Resume: FC = () =>
{
    const education = (resume?.education ?? []).map(e => EducationDto.from(e));
    const work = (resume?.work ?? []).map(e => WorkDto.from(e));

    if (!resume) 
    {
        return (
            <div className="resume-page">
                Hmm... there doesn't seem to be anything here?
            </div>
        )
    }

    const stats = useMemo(() => ([
        { label: "Roles", value: work.length.toString() },
        { label: "Education", value: education.length.toString() },
        { label: "Focus", value: "Product, systems, writing" }
    ]), [education.length, work.length]);

    return (
        <div className="resume-page">
            <div className="resume-shell">
                <header className="resume-hero">
                    <div className="eyebrow">Resume</div>
                    <h1>Where I've been building</h1>
                    <p className="lede">
                        From shipping game tools to crafting AI-powered products, I connect thoughtful UX with reliable systems.
                    </p>
                    <div className="resume-stats">
                        {stats.map(stat => (
                            <div className="stat-card" key={stat.label}>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </header>

                <section className="timeline-section">
                    <div className="section-heading">
                        <div className="eyebrow">Experience</div>
                        <h2>Work</h2>
                        <p className="section-subtitle">
                            Roles that blend product thinking, UX polish, and systems work.
                        </p>
                    </div>
                    <div className="timeline">
                        {work.map((entry, index) => (
                            <article className="timeline-card" key={`${entry.workplace}-${entry.title}-${index}`}>
                                <div className="timeline-marker" />
                                <div className="timeline-card__body">
                                    <div className="card-header">
                                        <div>
                                            <div className="card-title">{entry.title}</div>
                                            <div className="card-subtitle">
                                                {entry.workplace}{entry.division ? ` · ${entry.division}` : ""}
                                            </div>
                                        </div>
                                        <div className="card-dates">
                                            {formatShortDateRange(entry.start, entry.end)}
                                        </div>
                                    </div>
                                    <div className="card-meta">{entry.location}</div>
                                    <ul className="duty-list">
                                        {entry.duties?.map((duty, dutyIndex) => (
                                            <li key={`${entry.workplace}-${dutyIndex}`}>{duty}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="timeline-section">
                    <div className="section-heading">
                        <div className="eyebrow">Education</div>
                        <h2>Academics</h2>
                        <p className="section-subtitle">
                            Foundations in writing, mathematics, and structured thinking.
                        </p>
                    </div>
                    <div className="timeline">
                        {education.map((edu, index) => (
                            <article className="timeline-card" key={`${edu.institution}-${index}`}>
                                <div className="timeline-marker" />
                                <div className="timeline-card__body">
                                    <div className="card-header">
                                        <div>
                                            <div className="card-title">{edu.institution}</div>
                                            <div className="card-subtitle">{edu.degree}</div>
                                        </div>
                                        <div className="card-dates">
                                            {edu.end ? formatShortDateRange(edu.start, edu.end) : "Ongoing"}
                                        </div>
                                    </div>
                                    <div className="pill-row">
                                        {edu.majors?.map((major, majorIndex) => (
                                            <span className="pill" key={`${edu.institution}-major-${majorIndex}`}>
                                                Major: {major}
                                            </span>
                                        ))}
                                        {edu.minors?.map((minor, minorIndex) => (
                                            <span className="pill" key={`${edu.institution}-minor-${minorIndex}`}>
                                                Minor: {minor}
                                            </span>
                                        ))}
                                        {edu.gpa ? <span className="pill">GPA: {edu.gpa}</span> : null}
                                    </div>
                                    {(edu.achievements?.length || edu.accolades?.length) && (
                                        <ul className="duty-list">
                                            {[...(edu.achievements ?? []), ...(edu.accolades ?? [])].map((item, itemIndex) => (
                                                <li key={`${edu.institution}-note-${itemIndex}`}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
