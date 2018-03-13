# for jenkins config sh scripts
# http://35.194.108.26:8082/job/keystoneJS/configure


### 1st ###
#!/bin/sh -xe
# cat README.md
cd cms
npm i

### 2nd ###
#!/bin/sh -xe
cd cms
npm run standard

### 3rd ###
# ./templates
# ├── emails
# │   └── enquiry-notification.pug
# ├── layouts
# │   ├── default.pug
# │   └── draft.html
# ├── mixins
# │   └── flash-messages.pug
# └── views
#     ├── blog.pug
#     ├── contact.pug
#     ├── errors
#     │   ├── 404.pug
#     │   └── 500.pug
#     ├── gallery.pug
#     ├── index.pug
#     └── post.pug

# $ pug-lint a.pug
# $ pug-lint ./**/*.pug
# cd ~/m96dev/keystoneJS/cms

cd cms
pug-lint ./templates/views/*.pug
pug-lint ./templates/views/errors/*.pug
pug-lint ./templates/mixins/*.pug
pug-lint ./templates/layouts/*.pug
pug-lint ./templates/emails/*.pug
