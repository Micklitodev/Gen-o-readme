function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return '[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)'
      

    case "GPL":
      return '[![License](https://img.shields.io/badge/license-GPL-green)](./LICENSE)'


    case "BSD":
      return '[![License](https://img.shields.io/badge/license-BSD-green)](./LICENSE)'


    case "ASF":
      return '[![License](https://img.shields.io/badge/license-ASF-green)](./LICENSE)'


    case "CDDL":
      return '[![License](https://img.shields.io/badge/license-CDDL-green)](./LICENSE)'


    case "EPL":
      return '[![License](https://img.shields.io/badge/license-EPL-green)](./LICENSE)'


    default: ''
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return 'https://opensource.org/license/mit/'
      

    case "GPL":
      return 'https://opensource.org/license/gpl-2-0/'


    case "BSD":
      return 'https://opensource.org/license/bsd-2-clause/'


    case "Apache":
      return 'https://opensource.org/license/apache-2-0/'


    case "CDDL":
      return 'https://opensource.org/license/cddl1-txt/'


    case "EPL":
      return 'https://opensource.org/license/epl-2-0/'


    default: ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
   

    case "GPL":
      return `The licenses for most software are designed to take away your freedom to share and change it. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change free software–to make sure the software is free for all its users. This General Public License applies to most of the Free Software Foundation’s software and to any other program whose authors commit to using it. (Some other Free Software Foundation software is covered by the GNU Library General Public License instead.) You can apply it to your programs, too.`
   

    case "BSD":
      return `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      
      `
     

    case "ASF":
      return `1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.
      
      "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.
      
      "Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.
      
      "You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.
      
      "Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.
      
      "Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.
      
      "Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).
      
      "Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.
      
      "Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."
      
      "Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.`


    case "CDDL":
      return `COMMON DEVELOPMENT AND DISTRIBUTION LICENSE (CDDL) Version 1.0

      1. Definitions.
      
      1.1. “Contributor” means each individual or entity that creates or contributes to the creation of Modifications.
      
      1.2. “Contributor Version” means the combination of the Original Software, prior Modifications used by a Contributor (if any), and the Modifications made by that particular Contributor.
      
      1.3. “Covered Software” means (a) the Original Software, or (b) Modifications, or (c) the combination of files containing Original Software with files containing Modifications, in each case including portions thereof.
      
      1.4. “Executable” means the Covered Software in any form other than Source Code.
      
      1.5. “Initial Developer” means the individual or entity that first makes Original Software available under this License.
      
      1.6. “Larger Work” means a work which combines Covered Software or portions thereof with code not governed by the terms of this License.
      
      1.7. “License” means this document.
      
      1.8. “Licensable” means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently acquired, any and all of the rights conveyed herein.
      
      1.9. “Modifications” means the Source Code and Executable form of any of the following:`


    case "EPL":
      return `1. DEFINITIONS
      “Contribution” means:
      
      a) in the case of the initial Contributor, the initial content Distributed under this Agreement, and
      b) in the case of each subsequent Contributor:
      i) changes to the Program, and
      ii) additions to the Program;
      where such changes and/or additions to the Program originate from and are Distributed by that particular Contributor. A Contribution “originates” from a Contributor if it was added to the Program by such Contributor itself or anyone acting on such Contributor’s behalf. Contributions do not include changes or additions to the Program that are not Modified Works.
      
      “Contributor” means any person or entity that Distributes the Program.
      
      “Licensed Patents” mean patent claims licensable by a Contributor which are necessarily infringed by the use or sale of its Contribution alone or when combined with the Program.
      
      “Program” means the Contributions Distributed in accordance with this Agreement.
      
      “Recipient” means anyone who receives the Program under this Agreement or any Secondary License (as applicable), including Contributors.
      
      “Derivative Works” shall mean any work, whether in Source Code or other form, that is based on (or derived from) the Program and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship.
      
      “Modified Works” shall mean any work in Source Code or other form that results from an addition to, deletion from, or modification of the contents of the Program, including, for purposes of clarity any new file in Source Code form that contains any contents of the Program. Modified Works shall not include works that contain only declarations, interfaces, types, classes, structures, or files of the Program solely in each case in order to link to, bind by name, or subclass the Program or Modified Works thereof.
      
      “Distribute” means the acts of a) distributing or b) making available in any manner that enables the transfer of a copy.
      
      “Source Code” means the form of a Program preferred for making modifications, including but not limited to software source code, documentation source, and configuration files.
      
      “Secondary License” means either the GNU General Public License, Version 2.0, or any later versions of that license, including any exceptions or additional permissions as identified by the initial Contributor.`

    default: ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data)
  const link = renderLicenseLink(data)
  const section = renderLicenseSection(data)

  return `
  ## License
  
  ${data} ${badge} 

   To see full details visit ${link}


   Preview... 

   ${section}
  
  `

}


module.exports = generateMarkdown;
