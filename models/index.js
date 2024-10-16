const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between Blog and comments, one blog can have many comments 
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});


Comment.belongsTo(User, {
  foreignKey: 'user_id'
  
});

// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
Blog.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comment };
