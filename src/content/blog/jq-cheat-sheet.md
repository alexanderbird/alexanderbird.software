(Link to [official `jq` docs](https://stedolan.github.io/jq/))

### Making `.jq` files executable
```
$ echo '"World"' | ./greeting.jq
{
  "hello": "World"
}
$ cat greeting.jq
#!/usr/bin/env jq -f

{
  hello: .
}
```

- make sure the file is executable (`chmod +x greeting.jq`)
- The [`-f` flag](https://stedolan.github.io/jq/manual/#Invokingjq) tells jq to
  read the filter from file

### Vim syntax highlighting

GitHub: [vito-c/jq.vim](https://github.com/vito-c/jq.vim)
