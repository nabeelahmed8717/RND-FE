import {
  AlignmentType,
  Document,
  HeadingLevel,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
} from "docx";
export class DocumentCreator {
  // tslint:disable-next-line: typedef
  public create([
    educations,
  ]: any): Document {
    const document = new Document({
      sections: [
        {
          children: [

            ...educations
              .map((education: any) => {
                const arr: Paragraph[] = [];
                arr.push(new Paragraph({
                  text: education.clientName,
                  heading: HeadingLevel.TITLE,
                }),)
                arr.push(this.createSubHeading(education.reportPeriod),)
                arr.push(
                  this.createInstitutionHeader(
                    education.companyContract,
                  )
                );
                education.claimDetails.map((details: any) => {
                  arr.push(this.createHeading(details.status)),
                    arr.push(new Paragraph(details.details));
                  arr.push(this.createSubHeading(details.claimsNumber))
                })
                education.claimsBullet.map((bullets: any) => {
                  arr.push(this.createBullet(bullets));
                })

                return arr;
              })
              .reduce((prev: any, curr: any) => prev.concat(curr), []),
          ],
        },
      ],
    });

    return document;
  }

  public createContactInfo(
    phoneNumber: string,
    profileUrl: string,
    email: string
  ): Paragraph {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun(
          `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
        ),
        new TextRun({
          text: "Address: 58 Elm Avenue, Kent ME4 6ER, UK",
          break: 1,
        }),
      ],
    });
  }

  public createHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true,
    });
  }

  public createSubHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2,
    });
  }

  public createInstitutionHeader(
    institutionName: string,

  ): Paragraph {
    return new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({
          text: institutionName,
          bold: true,
        }),
      ],
    });
  }

  public createRoleText(roleText: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: roleText,
          italics: true,
        }),
      ],
    });
  }

  public createBullet(text: string): Paragraph {
    return new Paragraph({
      text: text,
      bullet: {
        level: 0,
      },
    });
  }

  // tslint:disable-next-line:no-any
  public createSkillList(skills: any[]): Paragraph {
    return new Paragraph({
      children: [
        new TextRun(skills.map((skill) => skill.name).join(", ") + "."),
      ],
    });
  }

  // tslint:disable-next-line:no-any
  public createAchivementsList(achivements: any[]): Paragraph[] {
    return achivements.map(
      (achievement) =>
        new Paragraph({
          text: achievement.name,
          bullet: {
            level: 0,
          },
        })
    );
  }

  public createInterests(interests: string): Paragraph {
    return new Paragraph({
      children: [new TextRun(interests)],
    });
  }

  public splitParagraphIntoBullets(text: string): string[] {
    return text.split("\n\n");
  }

}
