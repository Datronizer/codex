import { Container } from "react-bootstrap";
import resume from "./json/chiens-resume-nov-23.json";
import { EducationDto } from "./dtos/Education.dto";
import { formatShortDateRange } from "../../util";
import { WorkDto } from "./dtos/Work.dto";

export function Resume()
{
    const education = resume.education.map(e => EducationDto.from(e));
    const work = resume.work.map(e => WorkDto.from(e));

    if (!resume) 
    {
        return (
            <Container>
                Hmm... there doesn't seem to be anything here?
            </Container>
        )
    }

    return (
        <Container>
            <h3>Education</h3>
            {education.map(e => <EducationBlock education={e} />)}

            <h3>Work</h3>
            {work.map(e => <WorkBlock work={e} />)}
        </Container>
    );
}

function EducationBlock(props: { education: EducationDto }) // make new type
{
    const edu = props.education;

    return (
        <div>
            <p>
                <strong>{edu.institution}</strong> | {edu.end ? formatShortDateRange(edu.start, edu.end) : "Ongoing"}
                <br />
                {edu.degree} in {edu.majors.map(e => <em>{e}</em>)}. Minored in {edu.minors?.map(e => <em>{e}</em>)}.
                <br />
                Achievements: {edu.achievements?.map(e => <li>{e}</li>)}
                Accolades: {edu.accolades?.map(e => <li>{e}</li>)}
            </p>
        </div>
    )
}

function WorkBlock(props: { work: WorkDto })
{
    const work = props.work;

    return (
        <div>
            <p>
                <strong>{work.workplace.toLocaleUpperCase()}</strong> | {formatShortDateRange(work.start, work.end)}
                <br />
                <strong>{work.title}</strong>{work.division ? `, ${work.division}` : null}
                <br />
                <ul>
                    {work.duties?.map(e => <li>{e}</li>)}
                </ul>
            </p>
        </div>
    )
}