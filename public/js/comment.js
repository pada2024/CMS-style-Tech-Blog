const newFormHandler = async (event) => {
  console.log(2);
  event.preventDefault();


  const comment = document.querySelector('#comment-body').value.trim();
console.log(3, comment);

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add comment');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};
const button = document
  .querySelector('.btn.btn-primary');
  console.log(43, button);
  
  button.addEventListener('click', newFormHandler);



// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
