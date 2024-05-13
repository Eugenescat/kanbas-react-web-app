export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit alink to the landing page of your Webapplication running on Netlify. The landingpage should include the following: Your fullname and section Links to each of the labassignments Link to the Kanbas applicationLinks to all relevant source code repositoriesThe Kanbas application should include a linkto navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="online">Online</option>
                </select>
            
                <tr>
                    <td align="right" valign="top">
                    <label>Online Entry Options</label>
                    </td>
                </tr>

                <tr>
                    <td align="left" valign="top">
                        <input type="checkbox" id="wd-text-entry" name="onlineEntry" value="textEntry" />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <input type="checkbox" id="wd-website-url" name="onlineEntry" value="websiteURL" />
                        <label htmlFor="wd-website-url">Website URL</label>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <input type="checkbox" id="wd-media-recordings" name="onlineEntry" value="mediaRecordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <input type="checkbox" id="wd-student-annotation" name="onlineEntry" value="studentAnnotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <input type="checkbox" id="wd-file-upload" name="onlineEntry" value="fileUploads" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
            </td>
          </tr>
          

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assign</label>
            </td>
            <td>
                <table>
                <tr>
                    <label> Assign to</label><br/>
                    <input id="wd-assign-to" value={"Everyone"} />
                </tr><br/>
                <tr>
                    <label >Due</label><br/>
                    <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
                </tr><br/>
                <tr>
                    <td>
                        <label >Available from</label><br/>
                        <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
                    </td>
                    <td>
                        <label >Until</label><br/>
                        <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
                    </td>
                </tr>
                </table>
            </td>
          </tr>
        </table>

        <hr/>

        <table width="100%">
            <tr>
                <td align="right">
                    <button onClick={() => console.log("Save")}>Save</button>
                    <button onClick={() => console.log("Cancel")}>Cancel</button>
                </td>
            </tr>
        </table>

      </div>
  );
}
  