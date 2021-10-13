/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('beginners', {
        id: 'id',
        name: { type: 'varchar(1000)', notNull: true },
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
      })
      pgm.createTable('posts', {
        id: 'id',
        beginnerId: {
          type: 'integer',
          notNull: true,
          references: '"beginners"',
          onDelete: 'cascade',
        },
        body: { type: 'text', notNull: true },
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
      })
      pgm.createIndex('posts', 'beginnerId')
};

exports.down = pgm => {};
