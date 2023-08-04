import { getCommentsCount } from './comment.js';

describe('getCommentCount Test', () => {
  it('should return 0', async () => {
    const comments = [];
    const count = getCommentsCount(comments);
    expect(count).toBe(0);
  });

  it('should return the correct comment count', async () => {
    const comments = [
      { id: 1, text: 'Comment 1' },
      { id: 2, text: 'Comment 2' },
      { id: 3, text: 'Comment 3' },
    ];
    const count = getCommentsCount(comments);
    expect(count).toBe(3);
  });
});
