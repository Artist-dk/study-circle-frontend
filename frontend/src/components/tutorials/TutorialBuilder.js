import React, { useState } from 'react';

const TutorialBuilderContainer = 'tutorial-builder-container';
const TutorialBuilderTitle = 'tutorial-builder-title';
const TutorialBuilderForm = 'tutorial-builder-form';
const TutorialBuilderLabel = 'tutorial-builder-label';
const TutorialBuilderInput = 'tutorial-builder-input';
const TutorialBuilderTextarea = 'tutorial-builder-textarea';
const TutorialBuilderButton = 'tutorial-builder-button';
const TutorialBuilderRemoveButtonContainer = 'tutorial-builder-remove-button-container';
const TutorialBuilderSection = 'tutorial-builder-section';
const TutorialBuilderSectionTitle = 'tutorial-builder-section-title';
const TutorialBuilderSectionInput = 'tutorial-builder-section-input';
const TutorialBuilderSectionMediaInput = 'tutorial-builder-section-media-input';

const TutorialBuilder = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sections, setSections] = useState([
    { title: 'Introduction', content: '', media: '' },
    { title: 'Step 1', content: '', media: '' },
  ]);

  const handleAddSection = () => {
    setSections([...sections, { title: '', content: '', media: '' }]);
  };

  const handleRemoveSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const handleChangeSectionTitle = (index, event) => {
    const newSections = [...sections];
    newSections[index].title = event.target.value;
    setSections(newSections);
  };

  const handleChangeSectionContent = (index, event) => {
    const newSections = [...sections];
    newSections[index].content = event.target.value;
    setSections(newSections);
  };

  const handleChangeSectionMedia = (index, event) => {
    const newSections = [...sections];
    newSections[index].media = event.target.value;
    setSections(newSections);
  };


  const jsonToReadme = (jsonData) => {
    jsonData = JSON.parse(jsonData)
    // Validate and extract data from jsonData (if needed)
    const title = jsonData.title || ""; // Use default value if not present
    const description = jsonData.description || "";
    const sections = jsonData.sections || []; // Use empty array if not present
  
    const tutorialContent = `# ${title}

${description}

${sections.map((section) => {
const trimmedContent = section.content.trim();
return (
`## ${section.title}

${section.media ? `![${section.title} Media](${section.media})` : ''}

${trimmedContent}`)
}).join('\n\n')}`;
  
    const blob = new Blob([tutorialContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README1.md';
    link.click();
  
    URL.revokeObjectURL(url);
  };
  
  const handleSaveAsJson = () => {
    const formData = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      sections: sections.map((section) => ({
        title: section.title,
        content: section.content,
        media: section.media,
      })),
    };
  
    const jsonData = JSON.stringify(formData, null, 2);
  
    console.log(jsonData);

    jsonToReadme(jsonData)

    fetch('http://localhost:8081/tutorial/save', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: jsonData
    })
    .then(response => {
      // if (!response.ok) {
      //   throw new Error(`Error saving tutorial: ${response.statusText}`);
      // }
      console.log('Tutorial saved successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
    });

  };

  return (
    <div className={TutorialBuilderContainer}>
      <h2 className={TutorialBuilderTitle}>Tutorial Builder</h2>
      <form onSubmit={(e) => e.preventDefault()} className={TutorialBuilderForm}>
        <label htmlFor="title" className={TutorialBuilderLabel}>
          Tutorial Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={TutorialBuilderInput}
        />
        <label htmlFor="description" className={TutorialBuilderLabel}>
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={TutorialBuilderTextarea}
        />

        {sections.map((section, index) => (
          <div key={index} className={TutorialBuilderSection}>
            <h3 className={TutorialBuilderSectionTitle}>
              {index + 1}. {section.title}
            </h3>
            <input
              type="text"
              placeholder="Section Title"
              value={section.title}
              onChange={(e) => handleChangeSectionTitle(index, e)}
              className={TutorialBuilderSectionInput}
            />
            <textarea
              value={section.content}
              onChange={(e) => handleChangeSectionContent(index, e)}
              className={TutorialBuilderTextarea}
            />
            <label htmlFor={`media-input-${index}`} className={TutorialBuilderLabel}>
              Media URL (optional):
            </label>
            <input
              id={`media-input-${index}`}
              type="url"
              placeholder="Enter image or video URL"
              value={section.media}
              onChange={(e) => handleChangeSectionMedia(index, e)}
              className={TutorialBuilderSectionMediaInput}
            />
            {sections.length > 1 && (
              <div className={TutorialBuilderRemoveButtonContainer}>
                <button type="button" onClick={() => handleRemoveSection(index)}>
                  Remove Section
                </button>
              </div>
            )}
          </div>
        ))}

        <button type="button" onClick={handleAddSection} className={TutorialBuilderButton}>
          Add Section
        </button>

        <button type="button" onClick={handleSaveAsJson} className={TutorialBuilderButton}>
          Save to tutorial.md
        </button>
      </form>
    </div>
  );
};

export default TutorialBuilder;

