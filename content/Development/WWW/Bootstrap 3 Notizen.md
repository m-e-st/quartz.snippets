
## Navbar

#### Default color usage

Here are the main colors and their usage:

-   `#F8F8F8`: navbar background
-   `#E7E7E7`: navbar border
-   `#777`: default color
-   `#333`: hover color (`#5E5E5E` for `.nav-brand`)
-   `#555`: active color
-   `#D5D5D5`: active background

https://stackoverflow.com/questions/18529274/change-navbar-color-in-twitter-bootstrap
https://work.smarchal.com/twbscolor/css/e74c3cc0392becf0f1ffbbbc0


## Cards

#### Bootsnipp

- overview : []()
- simple : [Bootstrap 3 Social card](https://bootsnipp.com/snippets/8M2WK)

#### Stack Overflow
Quelle: [Bootstrap 3 Card - Stack Overflow](https://stackoverflow.com/questions/49160572/bootstrap-3-card)
Simple use of panels
```xml
<div class="panel panel-default">
  <div class="panel-heading">Panel Heading</div>
  <div class="panel-body">Panel Content</div>
  <div class="panel-footer">Panel Footer</div>
</div>
```

or SASS: [Card component for Bootstrap 3 (GitHub)](https://github.com/martinbean/bootstrap-3-card)

Or
```xml
<div class="row">
  <div class="col-md-2">&nbsp;</div>
  <div class="col-md-8">
    <div class="row space-16">&nbsp;</div>
    <div class="row">
      <div class="col-sm-4">
        <div class="thumbnail">
          <div class="caption text-center" onclick="location.href='https://flow.microsoft.com/en-us/connectors/shared_slack/slack/'">
            <div class="position-relative">
              <img src="https://az818438.vo.msecnd.net/icons/slack.png" style="width:72px;height:72px;" />
            </div>
            <h4 id="thumbnail-label"><a href="https://flow.microsoft.com/en-us/connectors/shared_slack/slack/" target="_blank">Microsoft Slack</a></h4>
            <p><i class="glyphicon glyphicon-user light-red lighter bigger-120"></i>&nbsp;Auditor</p>
            <div class="thumbnail-description smaller">Slack is a team communication tool, that brings together all of your team communications in one place, instantly searchable and available wherever you go.</div>
          </div>
          <div class="caption card-footer text-center">
            <ul class="list-inline">
              <li><i class="people lighter"></i>&nbsp;7 Active Users</li>
              <li></li>
              <li><i class="glyphicon glyphicon-envelope lighter"></i><a href="#">&nbsp;Help</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2">&nbsp;</div>
  </div>
</div>
```